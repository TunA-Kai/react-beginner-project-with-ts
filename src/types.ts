export enum TAction {
    GET_DATA = 'GET_DATA',
    UPDATE_REQUEST = 'UPDATE_REQUEST',
    SHOW_ERROR = 'SHOW_ERROR',
    SHOW_DATA = 'SHOW_DATA',
    LOGGING_IN = 'LOGGING_IN',
    LOGGING_OUT = 'LOGGING_OUT',
}

export type TStatus = 'idle' | 'pending' | 'success' | 'error'

export type GithubAction =
    | { type: TAction.GET_DATA }
    | {
          type: TAction.SHOW_DATA
          payload: { githubUser: any; repos: any; followers: any }
      }
    | {
          type: TAction.SHOW_ERROR
          payload: { error: string; isRunoutRequest?: boolean }
      }
    | { type: TAction.UPDATE_REQUEST; remainRequest: number }
    | { type: TAction.LOGGING_IN }
    | { type: TAction.LOGGING_OUT }

export interface GithubState {
    githubUser: any
    repos: any
    followers: any
    remainRequest: number
    error: string
    status: TStatus
    isAuth: boolean
}

export interface GithubContextT extends GithubState {
    searchGithubUser(user: string): Promise<void>
    dispatch: React.Dispatch<GithubAction>
}
