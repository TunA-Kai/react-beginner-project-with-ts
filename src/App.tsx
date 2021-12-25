import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div>
            <Dashboard></Dashboard>
            <Login />
            <Error />
        </div>
    )
}

export default App
