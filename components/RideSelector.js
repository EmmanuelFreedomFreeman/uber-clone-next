import {useState,useEffect} from 'react'
import tw from 'tailwind-styled-components'
function RideSelector({PickupCoordinates,DropoffCoordinates}) {
    const carListe = [
        {
            service: 'UberX',
            time: '5 min away',
            price: 1,
            image: 'https://www.pngkey.com/png/full/949-9493590_sedn-hatchback-suv.png'
        },
        {
            service: 'UberXL',
            time: '5 min away',
            price: 2,
            image: 'https://www.pngkey.com/png/full/859-8598108_cars-vector-suv-suv-car-cartoon-transparent.png'
        },
        {
            service: 'Back',
            time: '5 min away',
            price: 3,
            image: 'https://www.pngitem.com/pimgs/m/479-4791585_car-vector-background-png-transparent-png.png'
        },
        {
            service: 'Confort',
            time: '5 min away',
            price: 4,
            image: 'https://p.kindpng.com/picc/s/210-2104092_transparent-luxury-car-png-vector-car-images-free.png'
        },
        {
            service: 'Black SUV',
            time: '5 min away',
            price: 5,
            image: 'https://st3.depositphotos.com/9916232/18137/v/450/depositphotos_181372592-stock-illustration-retro-vintage-vector-car-transparent.jpg'
        }
    ]

    const [RideDuration, setRideDuration] = useState(0)
    useEffect(() => {

        function fetchData() {
                fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${PickupCoordinates[0]},${PickupCoordinates[1]};${DropoffCoordinates[0]},${DropoffCoordinates[1]}?`+
                new URLSearchParams({
                    access_token: 'pk.eyJ1IjoiZW1tYWtpbmdvZnBvcCIsImEiOiJja3ZtYmZvcHExZThpMm90a21xZGRvb2dhIn0.usyCnUyDbOFELr0DGCAHGQ',
                    
                })
            )
            .then(response => response.json())
            .then(data=>{
                
            if(data?.routes){
               
                if(data?.routes[0]?.duration){
                    setRideDuration(data.routes[0].duration/100)
                }
            }
            
            })
        }
            
        try {
            fetchData()
        } catch (error) {
            console.log(error)
        }
       

    })

   

    return (
        <Wrapper>
            <Title>Choose your ride or swipe up for more</Title>
            <CarList>
                {carListe.map((car,index)=>(
                
                <Car key={index}>
                    <CarImage src={car.image} />
                    <CarDetails>
                        <Services>{car.service}</Services>
                        <Times>{car.time}</Times>
                        
                    </CarDetails>
                    <Price>{'$'+ (car.price * RideDuration).toFixed(2) }</Price>
                </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Title = tw.div`
text-center text-xs text-gray-500 py-2 border-b
`
const CarList = tw.div`
overflow-y-scroll 
`
const Car = tw.div`
flex  items-center p-2
`
const CarImage = tw.img`
w-20 mr-4
`

const CarDetails = tw.div`
flex-1
`
const Services = tw.div`
text-sm font-medium
`
const Times = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm text-gray-500
`

const Wrapper = tw.div`
overflow-y-scroll flex flex-col border-b h-43
`