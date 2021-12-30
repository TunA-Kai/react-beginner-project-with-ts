import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/createpost'>Create Post</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/createpost' element={<CreatePost />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
