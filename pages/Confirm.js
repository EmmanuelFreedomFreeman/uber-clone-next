import { useRouter } from 'next/dist/client/router'
import {useEffect,useState} from 'react'
import tw from 'tailwind-styled-components'
import Map from '../components/map'
import RideSelector from '../components/RideSelector'
import Link from 'next/dist/client/link'


// "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN"


function Confirm() {

    const [PickupCoordinates,setPickupCoordinates] = useState([0,0])
    const [DropoffCoordinates,setDropoffCoordinates] = useState([0,0])

    const router = useRouter()
    const {pickup,dropoff} = router.query
    
    const getPickupCoordinates = () =>{
        const loc = pickup && pickup
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?`+
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZW1tYWtpbmdvZnBvcCIsImEiOiJja3ZtYmZvcHExZThpMm90a21xZGRvb2dhIn0.usyCnUyDbOFELr0DGCAHGQ',
                limit:1
            })
        )
        .then(response => response.json())
        .then(data=>{
            setPickupCoordinates(data.features[0].center)
        })
    }

    const getDropoffCoordinates = () =>{
        const loc = dropoff && dropoff
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${loc}.json?`+
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoiZW1tYWtpbmdvZnBvcCIsImEiOiJja3ZtYmZvcHExZThpMm90a21xZGRvb2dhIn0.usyCnUyDbOFELr0DGCAHGQ',
                limit:1
            })
        )
        .then(response => response.json())
        .then(data=>{
            setDropoffCoordinates(data.features[0].center)
        })
    }

    useEffect(()=>{
        getPickupCoordinates()
        getDropoffCoordinates()
    },[])

    return (
        <Wrapper>
            <ButtonContainer>
                <Link href='/search' >
                    <BackButton src ='https://static.thenounproject.com/png/251451-200.png' />
                </Link>
            </ButtonContainer>
                
            <Map PickupCoordinates={PickupCoordinates} DropoffCoordinates={DropoffCoordinates} />
            
            <RideContenair>
                <RideSelector PickupCoordinates={PickupCoordinates} DropoffCoordinates={DropoffCoordinates}  />

            </RideContenair>
            <ConfirmButtonContenair>
                Confirm Location
            </ConfirmButtonContenair>


        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex flex-col h-screen 
`

const RideContenair = tw.div`
h-1/2 
`
const ConfirmButtonContenair = tw.div`
bg-black text-white p-2 text-center m-2 
`
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10
`
const BackButton = tw.img`
h-5  cursor-pointer object-contain
`