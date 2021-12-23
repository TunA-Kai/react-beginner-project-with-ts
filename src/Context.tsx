import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import { ContextIn } from './Interface'

const table = {
    sports: 21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''

const AppContext = React.createContext({} as ContextIn)

const AppProvider: React.FC = ({ children }) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export function useGlobalContext(): ContextIn {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
