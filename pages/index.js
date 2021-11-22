
import { useRef, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import Map from '../components/map'
import Link from 'next/link'
import { onAuthStateChanged,signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import {auth} from '../firebasedao'


export default function Home() {

  const [User, setUser] = useState(null)
  const route = useRouter()
  useEffect(()=>{

    return onAuthStateChanged(auth,user =>{
      if(user){
        setUser({name: user.displayName,photo: user.photoURL})
      }else{
        setUser(null)
          route.push('/login')
      }
    })
  },[])

  return (
    
    <Wrapper>
      <Logout onClick={() =>{signOut(auth)}} src='https://previews.123rf.com/images/sarahdesign/sarahdesign1410/sarahdesign141000851/32210992-logout-icon.jpg' />

      <Map>
        
      </Map>
      <ActionItems>
          <Header>
              <UberLogo src='https://mediad.publicbroadcasting.net/p/klcc/files/styles/x_large/public/201411/uber.jpg' />
              <Profile>
                <Name>{User && User.name}</Name>
                <UserImage src={User && User.photo} />
              </Profile>
          </Header>
         <ActionButtons>
           <Link href='/search'>
           <ActionButton>
             <ActionButtonImage src='https://www.pngkey.com/png/full/949-9493590_sedn-hatchback-suv.png' />
             <p>Ride</p>
           </ActionButton>
           </Link>
           <ActionButton>
           <ActionButtonImage src='https://freesvg.org/img/1553102662.png' />
             <p>2 - Wheels</p>
           </ActionButton>
           <ActionButton>
             <ActionButtonImage src='https://iconape.com/wp-content/files/dq/90206/svg/reserve-with-google-2.svg' />
             <p>Reserve</p>
           </ActionButton>

          </ActionButtons>

          <InputButton>
          where to ?
          </InputButton> 
      </ActionItems>
    </Wrapper>
  )
}


const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
 flex-1 p-4
`
/////////////////////  header ////////////////////////
const Header = tw.div`
flex justify-between
`
const UberLogo= tw.img`
h-12
`
const Profile = tw.div`
flex items-center
`

const Name = tw.h4`
mr-4 w-20
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray p-px bg-cover object-cover
`

///////////////////// end header ////////////////////////

const ActionButtons = tw.div`
flex justify-between 
`

const ActionButton = tw.div`
h-20 w-40 bg-gray-200 flex-col p-2  m-2 items-center rounded-lg transform hover:scale-105 
`

const ActionButtonImage = tw.img`
h-3/5 items-center
`

///////////////////// end header ////////////////////////


const InputButton = tw.div`
h-14 bg-gray-200 p-2 mt-4
`

const Logout = tw.img`
rounded-full absolute top-4 left-4 z-10 h-10
`