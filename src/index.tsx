import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/productsContext'
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'

ReactDOM.render(
    <React.StrictMode>
        <ProductsProvider>
            <CartProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </CartProvider>
        </ProductsProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
