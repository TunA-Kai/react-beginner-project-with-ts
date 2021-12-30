import { User } from 'firebase/auth'

export enum TAction {
    GET_DATA = 'GET_DATA',
    UPDATE_REQUEST = 'UPDATE_REQUEST',
    SHOW_ERROR = 'SHOW_ERROR',
    SHOW_DATA = 'SHOW_DATA',
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

export interface GithubState {
    githubUser: any
    repos: any
    followers: any
    remainRequest: number
    error: string
    status: TStatus
}

export interface GithubContextT extends GithubState {
    searchGithubUser(user: string): Promise<void>
    user: User | null
}
