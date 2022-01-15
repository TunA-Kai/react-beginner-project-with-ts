import { TProductsAction, TProductsState } from '../types/productsTypes'

function productsReducer(
    state: TProductsState,
    action: TProductsAction,
): TProductsState {
    switch (action.type) {
        case 'GET_PRODUCTS_BEGIN':
        case 'GET_SINGLE_PRODUCTS_BEGIN':
            return { ...state, status: 'loading' }
        case 'GET_PRODUCTS_SUCCESS': {
            const { products } = action
            const featuredProducts = products.filter(p => p.featured)
            return { ...state, status: 'success', products, featuredProducts }
        }
        case 'GET_SINGLE_PRODUCTS_SUCCESS': {
            const { singleProduct } = action
            return { ...state, status: 'success', singleProduct }
        }
        case 'GET_PRODUCTS_ERROR':
        case 'GET_SINGLE_PRODUCTS_ERROR':
            return { ...state, status: 'reject', error: action.errorMessage }
    }
}

export default productsReducer
