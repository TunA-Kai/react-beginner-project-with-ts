interface TCartState {}

type TCartAction =
    | { type: 'ADD_TO_CART' }
    | { type: 'CLEAR_CART' }
    | { type: 'COUNT_CART_TOTAL' }
    | { type: 'REMOVE_CART_ITEM' }
    | { type: 'TOGGLE_CART_ITEM_AMOUNT' }

export type { TCartAction, TCartState }
