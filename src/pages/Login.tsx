import styled from 'styled-components'
import loginImg from '../images/login-img.svg'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { useState } from 'react'
import { auth, uiConfig } from '../firebase-config'
import { useGithubContext } from '../context/context'

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

    return (
        <Wrapper>
            <div className='container'>
                <img src={loginImg} alt='github user' />
                <h1>github user</h1>

                {isLogin ? (
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={auth}
                    />
                ) : (
                    <button className='btn' onClick={() => setIsLogin(true)}>
                        login
                    </button>
                )}
            </div>
        </Wrapper>
    )
}

export default Login
