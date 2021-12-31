import { GithubAction, GithubState, TAction } from '../types'

export function githubReducer(
    state: GithubState,
    action: GithubAction,
): GithubState {
    switch (action.type) {
        case TAction.SHOW_ERROR:
            return {
                ...state,
                remainRequest: action.payload.isRunoutRequest
                    ? 0
                    : state.remainRequest,
                error: action.payload.error,
                status: 'error',
            }
        case TAction.UPDATE_REQUEST:
            return {
                ...state,
                remainRequest: action.remainRequest,
            }
        case TAction.GET_DATA:
            return {
                ...state,
                status: 'pending',
            }
        case TAction.SHOW_DATA: {
            const { githubUser, repos, followers } = action.payload
            return {
                ...state,
                githubUser,
                repos,
                followers,
                status: 'success',
            }
        }
        case TAction.LOGGING_IN:
            return {
                ...state,
                isAuth: true,
            }
        case TAction.LOGGING_OUT:
            return {
                ...state,
                isAuth: false,
            }
    }
}
