import React, { useState, useContext, useEffect } from 'react'
import { ContextT } from './Interface'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext({} as ContextT)

const AppProvider: React.FC = ({ children }) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export function useGlobalContext(): ContextT {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
