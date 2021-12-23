import { ActionType } from './actionType'

export interface ContextIn extends StateIn {
  dispatch: React.Dispatch<ActionIn>
}

export interface StateIn {
  isLoading: boolean
  query: string
  page: number
  hits?: HitIn[]
  nbPages?: number
}

export type ActionIn =
  | { type: ActionType.SET_LOADING }
  | {
      type: ActionType.SET_STORIES
      payload: { hits: HitIn[]; nbPages: number }
    }
  | {
      type: ActionType.REMOVE_STORY
      payload: string
    }
  | {
      type: ActionType.HANDLE_SEARCH
      payload: string
    }
  | {
      type: ActionType.HANDLE_PAGE
      payload: string
    }

export interface HitIn {
  author: string
  title: string
  url: string
  points: number
  id: string
}
