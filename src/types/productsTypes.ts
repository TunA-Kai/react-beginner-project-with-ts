interface TProductsState {}

type TProductsAction =
    | { type: 'SIDEBAR_OPEN' }
    | { type: 'SIDEBAR_CLOSE' }
    | { type: 'GET_PRODUCTS_BEGIN' }
    | { type: 'GET_PRODUCTS_SUCCESS' }
    | { type: 'GET_PRODUCTS_ERROR' }
    | { type: 'GET_SINGLE_PRODUCTS_ERROR' }
    | { type: 'GET_SINGLE_PRODUCTS_ERROR' }
    | { type: 'GET_SINGLE_PRODUCTS_ERROR' }

export type { TProductsAction, TProductsState }
