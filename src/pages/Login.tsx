import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, provider } from '../firebase-config'

interface LoginProps {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const Login: React.FC<LoginProps> = ({ setIsAuth }) => {
    const navigate = useNavigate()

    function signInWithGoogle() {
        signInWithPopup(auth, provider).then(resutl => {
            localStorage.setItem('isAuth', 'true')
            setIsAuth(true)
            navigate('/')
        })
    }

    return (
        <div className='loginPage'>
            <p>Sign In</p>
            <button
                className='login-with-google-btn'
                onClick={signInWithGoogle}
            >
                Sign in with Google
            </button>
        </div>
    )
}

export default Login
