import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/productsContext'
import { CartProvider } from './context/cartContext'

ReactDOM.render(
    <React.StrictMode>
        <ProductsProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </ProductsProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
