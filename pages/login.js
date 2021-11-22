import {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import { auth,provider } from '../firebasedao'
function Login() {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth,user => {
            if(user) {
                router.push('/')
            }
        })

    },[])

    return (
        <Wrapper>

  
            

            <LogoImage src='https://pngimg.com/uploads/uber/uber_PNG7.png' />
            <SignInButton onClick={() => signInWithPopup(auth,provider)} >
                <Icon src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png' />
                <Text>Sign In with Google</Text>
            </SignInButton>

            {/* <img src='https://icon-library.com/images/uber-icon/uber-icon-11.jpg' /> */}

        </Wrapper>

    )
}

const Wrapper = tw.div`
    flex flex-col  p-3
`
const Icon = tw.img`
h-10 object-contain 
`
const SignInButton = tw.div`
flex flex-row flex-1 bg-black p-4 items-center justify-center mt-12
`
const Text = tw.p`
text-white text-center ml-2 
`
const LogoImage = tw.img`
object-contain
`

export default Login
