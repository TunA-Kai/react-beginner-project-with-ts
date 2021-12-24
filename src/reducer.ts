import { ActionT, ActionType, StateT } from './Interface'

export function reducer(state: StateT, action: ActionT): StateT {
    switch (action.type) {
        case ActionType.GET_MOVIES:
            return {
                ...state,
                status: 'GETTING_MOVIES',
                query: action.query ?? state.query,
            }
        case ActionType.SHOW_ERROR:
            return {
                ...state,
                status: 'ERROR',
                error: action.error,
            }
        case ActionType.SHOW_MOVIES:
            return {
                ...state,
                status: 'SHOWING_MOVIES',
                movies: action.movies,
            }
    }
}
