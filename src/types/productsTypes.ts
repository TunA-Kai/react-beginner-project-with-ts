interface TProduct {
    category: string
    colors: string[]
    company: string
    description: string
    id: string
    image: string
    name: string
    price: number
    shipping: boolean
    featured?: true
}

interface TProductsState {
    isSidebarOpen: boolean
    status: 'idle' | 'loading' | 'success' | 'reject'
    error: string
    products: TProduct[]
    featuredProducts: TProduct[]
}

type TProductsAction =
    | { type: 'SIDEBAR_OPEN' }
    | { type: 'SIDEBAR_CLOSE' }
    | { type: 'GET_PRODUCTS_BEGIN' }
    | { type: 'GET_PRODUCTS_SUCCESS'; products: TProduct[] }
    | { type: 'GET_PRODUCTS_ERROR'; errorMessage: string }
    | { type: 'GET_SINGLE_PRODUCTS_BEGIN' }
    | { type: 'GET_SINGLE_PRODUCTS_SUCCESS' }
    | { type: 'GET_SINGLE_PRODUCTS_ERROR'; errorMessage: string }

export type { TProductsAction, TProductsState, TProduct }
