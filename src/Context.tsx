import axios from 'axios'
import React, { useState, useContext, useEffect, useReducer } from 'react'
import { ContextT, QuestionT, StatusT } from './Interface'
import { reducer } from './reducer'

const table = {
    sports: 21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl =
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

const initialState = {
    status: 'setUpQues' as StatusT,
    questions: [] as QuestionT[],
    activeIndex: 0,
    correctAns: 0,
}

const AppContext = React.createContext({} as ContextT)

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext(): ContextT {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
