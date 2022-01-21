import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useState } from 'react'
import type { TCartProduct } from '../types/cartTypes'

interface CartContextType {
    cart: TCartProduct[]
    setCart: Dispatch<SetStateAction<TCartProduct[]>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<TCartProduct[]>([])
    return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

function useCartContext() {
    const context = useContext(CartContext)
    if (context === undefined) throw new Error('useCartContext must be used within a CartProvider')
    const { cart, setCart } = context
    const totalItems = cart.reduce((total, p) => total + p.amount, 0)
    const totalFee = cart.reduce((total, p) => total + p.amount * p.product.price, 0)

    function addToCart(cartProduct: TCartProduct): void {
        const foundCartProduct = cart.find(p => p.id === cartProduct.id)
        if (!foundCartProduct) {
            setCart([...cart, cartProduct])
            return
        }
        foundCartProduct.amount += cartProduct.amount
        if (foundCartProduct.amount > foundCartProduct.product.stock)
            foundCartProduct.amount = foundCartProduct.product.stock
        setCart(cart)
    }

    function removeItem(id: string): void {
        const newCart = cart.filter(p => p.id !== id)
        setCart(newCart)
    }

    function toggleAmount(id: string, newAmount: number): void {
        const newCart = cart.map(p => (p.id !== id ? p : { ...p, amount: newAmount }))
        setCart(newCart)
    }

    function clearCart(): void {
        setCart([])
    }

    return { cart, totalItems, totalFee, addToCart, removeItem, toggleAmount, clearCart }
}

export { CartProvider, useCartContext }
