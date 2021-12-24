import axios from 'axios'
import React, { useState, useContext, useEffect, useReducer } from 'react'
import { ActionType, ContextT, MovieT, StatusT } from './Interface'
import { reducer } from './reducer'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext({} as ContextT)

const initialState = {
    status: 'SHOW_MOVIES' as StatusT,
    error: '',
    movies: [] as MovieT[],
    query: 'minion',
}

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { query } = state

    async function fetchMovies(url: string): Promise<void> {
        dispatch({ type: ActionType.GET_MOVIES })
        try {
            const { data } = await axios.get(url)
            if (data.Response === 'False') throw new Error(`${data.Error}`)
            const movies: MovieT[] = data.Search.map((mov: any): MovieT => {
                const {
                    Poster: poster,
                    Title: title,
                    Year: year,
                    imdbID: imdbId,
                } = mov
                return { poster, title, year, imdbId }
            })
            console.log(data)
            dispatch({ type: ActionType.SHOW_MOVIES, movies })
        } catch (error: any) {
            dispatch({ type: ActionType.SHOW_ERROR, error: error.message })
        }
    }

    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}&s=${query}`)
    }, [query])

    return (
        <AppContext.Provider value={{ ...state, dispatch, fetchMovies }}>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext(): ContextT {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
