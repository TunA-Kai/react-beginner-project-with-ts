import React, { useContext, useReducer } from 'react'
import { ContextT, QuestionT, StatusT } from './Interface'
import { reducer } from './reducer'

const initialState = {
    status: 'setUpQues' as StatusT,
    questions: [] as QuestionT[],
    activeIndex: 0,
    correctAns: 0,
    error: '',
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
