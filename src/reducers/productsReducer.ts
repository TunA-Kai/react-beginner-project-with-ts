import { TProductsAction, TProductsState } from '../types/productsTypes'

function productsReducer(
    state: TProductsState,
    action: TProductsAction,
): TProductsState {
    switch (action.type) {
        case 'SIDEBAR_OPEN':
            return { ...state, isSidebarOpen: true }
        case 'SIDEBAR_CLOSE':
            return { ...state, isSidebarOpen: false }
    }
    return state
}

export default productsReducer
