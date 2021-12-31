import styled from 'styled-components'
import loginImg from '../images/login-img.svg'
import { useState } from 'react'
import { auth, emailProvider, googleProvider } from '../firebase-config'
import { useGithubContext } from '../context/context'
import { signInAnonymously, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { TAction } from '../types'

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    .container {
        width: 90vw;
        max-width: 600px;
        text-align: center;
    }
    img {
        margin-bottom: 2rem;
    }
    h1 {
        margin-bottom: 1.5rem;
    }
`

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const [isLogin, setIsLogin] = useState(false)
    const { dispatch } = useGithubContext()
    const navigate = useNavigate()

    return (
        <Wrapper>
            <div className='container'>
                <img src={loginImg} alt='github user' />
                <h1>github user</h1>

                {isLogin ? (
                    <>
                        <button onClick={googleSignIn}>
                            Login with google
                        </button>
                        <button onClick={emailSignIn}>Login with email</button>
                        <button onClick={anonymousSignIn}>
                            Login as guest
                        </button>
                    </>
                ) : (
                    <button className='btn' onClick={() => setIsLogin(true)}>
                        login
                    </button>
                )}
            </div>
        </Wrapper>
    )

    function googleSignIn() {
        signInWithPopup(auth, googleProvider).then(loggingIn)
    }

    function emailSignIn() {
        signInWithPopup(auth, emailProvider).then(loggingIn)
    }

    function anonymousSignIn() {
        signInAnonymously(auth).then(loggingIn)
    }

    function loggingIn() {
        dispatch({ type: TAction.LOGGING_IN })
        localStorage.setItem('isAuth', 'true')
        navigate('/')
    }
}

export default Login
