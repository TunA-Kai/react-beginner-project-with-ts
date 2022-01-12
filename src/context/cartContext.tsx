import { createContext, ReactNode, useContext } from 'react'

const initialState = {}

const CartContext = createContext<{} | undefined>(undefined)

function CartProvider({ children }: { children: ReactNode }) {
    return (
        <CartContext.Provider value={undefined}>
            {children}
        </CartContext.Provider>
    )
}

function useCartContext() {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('This component is not a child of CartProvider')
    }
    return context
}

export { useCartContext, CartProvider }
