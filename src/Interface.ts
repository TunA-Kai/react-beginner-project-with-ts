export enum ActionType {
    GET_MOVIES = 'GET_MOVIES',
    SHOW_ERROR = 'SHOW_ERROR',
    SHOW_MOVIES = 'SHOW_MOVIES',
}

export type StatusT = 'GETTING_MOVIES' | 'SHOWING_MOVIES' | 'ERROR'

export interface StateT {
    status: StatusT
    error: string
    movies: MovieT[]
    query: string
}

export type ActionT =
    | { type: ActionType.GET_MOVIES; query?: string }
    | { type: ActionType.SHOW_ERROR; error: string }
    | { type: ActionType.SHOW_MOVIES; movies: MovieT[] }

export interface ContextT extends StateT {
    dispatch: React.Dispatch<ActionT>
    fetchMovies(url: string): Promise<void>
}

export interface MovieT {
    poster: string
    title: string
    year: string
    imdbId: string
}
