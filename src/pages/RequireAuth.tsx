import { Navigate, useLocation } from 'react-router-dom'
import { useGithubContext } from '../context/context'
import { auth } from '../firebase-config'

interface RequireAuthProps {}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const { isAuth } = useGithubContext()
    // let location = useLocation()

    // console.log(user)
    // console.log(location)
    if (!isAuth) return <Navigate to='/login' />

    return <>{children}</>
}

export default RequireAuth
