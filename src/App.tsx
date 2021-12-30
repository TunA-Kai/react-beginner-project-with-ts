import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from './firebase-config'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
    const [isAuth, setIsAuth] = useState(
        () => localStorage.getItem('isAuth') === 'true',
    )
    const navigate = useNavigate()

    const signUserOut = () => {
        signOut(auth).then(_ => {
            localStorage.clear()
            setIsAuth(false)
            navigate('/login')
        })
    }

    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                {!isAuth ? (
                    <NavLink to='/login'>Login</NavLink>
                ) : (
                    <>
                        <NavLink to='/createpost'>Create Post</NavLink>
                        <button onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </nav>
            <Routes>
                <Route path='/' element={<Home isAuth={isAuth} />} />
                <Route
                    path='/createpost'
                    element={<CreatePost isAuth={isAuth} />}
                />
                <Route
                    path='/login'
                    element={<Login setIsAuth={setIsAuth} />}
                />
            </Routes>
        </>
    )
}

export default App
