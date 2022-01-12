import { createContext, ReactNode, useContext } from 'react'

const initialState = {}

const ProductsContext = createContext<{} | undefined>(undefined)

function ProductsProvider({ children }: { children: ReactNode }) {
    return (
        <ProductsContext.Provider value={undefined}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProductsContext() {
    const context = useContext(ProductsContext)
    if (context === undefined) {
        throw new Error('This component is not a child of ProductsProvider')
    }
    return context
}

export { useProductsContext, ProductsProvider }
