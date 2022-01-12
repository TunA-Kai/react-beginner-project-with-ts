import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useReducer,
    useState,
} from 'react'
import productsReducer from '../reducers/productsReducer'
import { TProductsAction, TProductsState } from '../types/productsTypes'

const initialState = {
    isSidebarOpen: false,
}

const ProductsContext = createContext<
    { state: TProductsState; dispatch: Dispatch<TProductsAction> } | undefined
>(undefined)

function ProductsProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(productsReducer, initialState)
    const productsContextValue = { state, dispatch }
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
    const { dispatch, state } = context
    const openSidebar = () => dispatch({ type: 'SIDEBAR_OPEN' })
    const closeSidebar = () => dispatch({ type: 'SIDEBAR_CLOSE' })
    return { ...state, openSidebar, closeSidebar }
}

export { useProductsContext, ProductsProvider }
