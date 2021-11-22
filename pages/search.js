import {useState} from 'react'
import Image from 'next/image';
import Link from 'next/link'
import tw from 'tailwind-styled-components'
import circle from './images/where.png'

const Search = () => {
    const [pickup, setpickup] = useState('')
    const [dropoff, setdropoff] = useState('')
    return (
        <Wrapper>

            {/* button container */}
            <Link href='/'>
                <ButtonContainer>
                    <BackButton src='https://static.thenounproject.com/png/251451-200.png' />
                </ButtonContainer>
            </Link>
            {/* Input Container */}
            <InputContainer>
                <Image 
                    src={circle}
                    alt='universe'
                    width={10}
                   height={50}
                   

                />
               {/* <InputBox /> */}
                <InputBoxes>
                    {/* inputbox */}
                    <Input placeholder='Enter pickup location' value={pickup} onChange={(e)=>setpickup(e.target.value)} />
                    <Input placeholder='where to ?' value={dropoff} onChange={(e)=>setdropoff(e.target.value)} />
                </InputBoxes>
                <PlusImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png' />
            </InputContainer>
            <SavedPlace>
                <PlusImage src='https://e7.pngegg.com/pngimages/17/606/png-clipart-star-star.png' />
                <p>Saved Places</p>
            </SavedPlace>


            {/* ConfirmButtonContenair */}

            <ConfirmButtonContenair>
                <Link href={{pathname: '/Confirm', query: {
                    pickup: pickup && pickup ,
                    dropoff: dropoff && dropoff
                }}}>
                    Confirm Location
                </Link>
            </ConfirmButtonContenair>

        </Wrapper>
    )
}

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white p-3`
const BackButton = tw.img`
h-5  cursor-pointer
`
const InputContainer = tw.div`
p-3 bg-white m-2 flex items-center
`
const Cirle = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input`
h-7 bg-gray-200 m-1 rounded-3 outline-none border-none p-3
`
const PlusImage = tw.img`
h-7 w-7 bg-gray-500 rounded-full mr-4 ml-3
`
const SavedPlace = tw.div`
mt-1 flex items-center bg-white p-2
`
const ConfirmButtonContenair = tw.div`
bg-black text-white p-2 text-center m-2 zindex-1
`

export default Search
