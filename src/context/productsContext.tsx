import axios from 'axios'
import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useEffect,
    useReducer,
} from 'react'
import productsReducer from '../reducers/productsReducer'
import {
    TProduct,
    TProductsAction,
    TProductsState,
} from '../types/productsTypes'
import { products_url } from '../utils/constants'

const initialState = {
    isSidebarOpen: false,
    status: 'idle' as const,
    error: '',
    products: [],
    featuredProducts: [],
    singleProduct: null,
}

const ProductsContext = createContext<
    | {
          state: TProductsState
          dispatch: Dispatch<TProductsAction>
          fetchSingleProduct(url: string): Promise<void>
      }
    | undefined
>(undefined)
const { signal, abort } = new AbortController()

function ProductsProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(productsReducer, initialState)

    function fetchProduct(type: 'single' | 'multiple') {
        return async function _fetchProduct(url: string) {
            dispatch({
                type:
                    type === 'single'
                        ? 'GET_SINGLE_PRODUCTS_BEGIN'
                        : 'GET_PRODUCTS_BEGIN',
            })
            try {
                const { data } = await axios.get(url, {
                    signal,
                })
                type === 'single'
                    ? dispatch({
                          type: 'GET_SINGLE_PRODUCTS_SUCCESS',
                          singleProduct: data,
                      })
                    : dispatch({
                          type: 'GET_PRODUCTS_SUCCESS',
                          products: data,
                      })
            } catch (error: any) {
                const { response, request } = error
                const errorMessage = response
                    ? 'The request was made and the server responded with a status code that falls out of the range of 2xx'
                    : request
                    ? 'The request was made but no response was received'
                    : 'Something happened in setting up the request that triggered an Error'
                dispatch({
                    type:
                        type === 'single'
                            ? 'GET_SINGLE_PRODUCTS_ERROR'
                            : 'GET_PRODUCTS_ERROR',
                    errorMessage,
                })
            }
        }
    }

    useEffect(() => {
        fetchProduct('multiple')(products_url)

        return () => abort()
    }, [])

    const productsContextValue = {
        state,
        dispatch,
        fetchSingleProduct: fetchProduct('single'),
    }
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
