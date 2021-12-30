import { Navigate, useLocation } from 'react-router-dom'
import { useGithubContext } from '../context/context'

interface RequireAuthProps {}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
    const { user } = useGithubContext()
    // let location = useLocation()

    console.log(user)
    // console.log(location)
    if (!user) return <Navigate to='/login' />

    return <>{children}</>
}

export default RequireAuth
