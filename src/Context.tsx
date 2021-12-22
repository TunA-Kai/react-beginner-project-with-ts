import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import { ActionType } from './actionType'
import { ContextIn } from './Interface'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {}

const AppContext = React.createContext({} as ContextIn)

const AppProvider: React.FC = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
