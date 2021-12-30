import { Dashboard, Login, RequireAuth, AuthWrapper, Error } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                }
            />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default App
