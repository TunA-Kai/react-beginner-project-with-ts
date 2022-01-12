interface TFilterState {}

type TFilterAction =
    | { type: 'LOAD_PRODUCTS' }
    | { type: 'SET_LISTVIEW' }
    | { type: 'SET_GRIDVIEW' }
    | { type: 'UPDATE_SORT' }
    | { type: 'SORT_PRODUCTS' }
    | { type: 'UPDATE_FILTER' }
    | { type: 'FILTER_PRODUCTS' }
    | { type: 'CLEAR_FILTERS' }

export type { TFilterAction, TFilterState }
