import { createContext, ReactNode, useContext } from 'react'

import { TProduct } from '../types/productsTypes'
import { products_url } from '../utils/constants'
import { useGetProduct } from '../utils/useGetProduct'

interface TProductContext {
    status: 'pending' | 'success' | 'reject'
    data?: any
    error?: string
}

const ProductsContext = createContext<TProductContext | undefined>(undefined)

function ProductsProvider({ children }: { children: ReactNode }) {
    const productsContextValue = useGetProduct(products_url)

    return (
        <ProductsContext.Provider value={productsContextValue}>
            {children}
        </ProductsContext.Provider>
    )
}

function useProductsContext() {
    const context = useContext(ProductsContext)
    if (context === undefined) {
        throw new Error('This component is not a child of ProductsProvider')
    }
    const { status, data, error } = context
    const products: ReadonlyArray<Readonly<TProduct>> = data

    return { status, error, products }
}

export { useProductsContext, ProductsProvider }
