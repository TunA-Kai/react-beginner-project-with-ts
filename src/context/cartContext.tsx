import { doc, getDoc, setDoc } from 'firebase/firestore'
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useEffect,
    useState,
} from 'react'
import { db } from '../firebase.config'
import type { TCartProduct } from '../types/cartTypes'
import { useUserContext } from './userContext'

interface CartContextType {
    cart: TCartProduct[]
    setCart: Dispatch<SetStateAction<TCartProduct[]>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<TCartProduct[]>([])
    const user = useUserContext()

    useEffect(() => {
        if (!user) {
            setCart([])
            return
        }
        getDoc(doc(db, 'cart', user.uid)).then(snapshot => {
            const userCart = snapshot.data()
            if (userCart) {
                setCart(userCart.cart)
            } else {
                setDoc(doc(db, 'cart', user.uid), { cart })
            }
        })
    }, [user])

    useEffect(() => {
        if (!user) return
        setDoc(doc(db, 'cart', user.uid), { cart })
    }, [cart])

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
