import { ActionType } from './actionType'
import { ActionIn, StateIn } from './Interface'

function reducer(state: StateIn, action: ActionIn): StateIn {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case ActionType.SET_STORIES:
      const { hits, nbPages } = action.payload
      return {
        ...state,
        hits,
        nbPages,
        isLoading: false,
      }
    case ActionType.REMOVE_STORY:
      return {
        ...state,
        hits: state.hits?.filter(hit => hit.id !== action.payload),
      }
    case ActionType.HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      }
    case ActionType.HANDLE_PAGE:
      const page = state.page + (action.payload === 'inc' ? 1 : -1)
      return {
        ...state,
        page,
      }
  }
}
export default reducer
