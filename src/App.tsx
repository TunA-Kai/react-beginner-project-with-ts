import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import { SidebarContext } from './context/sidebarContext'
import { About, Cart, Checkout, Error, Home, Products, SignIn, SingleProduct } from './pages'

function App() {
    return (
        <BrowserRouter>
            <SidebarContext>
                <Navbar />
                <Sidebar />
            </SidebarContext>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products/:id' element={<SingleProduct />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
