import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/productsContext'
import { CartProvider } from './context/cartContext'
import { UserProvider } from './context/userContext'

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <ProductsProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </ProductsProvider>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
