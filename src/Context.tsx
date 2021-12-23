import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'
import { ActionType } from './actionType'
import { ContextIn, HitIn } from './Interface'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {
  isLoading: true,
  query: 'react',
  page: 0,
}

const AppContext = React.createContext({} as ContextIn)

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { query, page } = state

  async function fetchStories(url: string): Promise<void> {
    dispatch({ type: ActionType.SET_LOADING })
    try {
      const response = await fetch(url)
      const data = await response.json()
      const hits = data.hits.map((hit: any): HitIn => {
        const { author, title, url, points, objectID: id } = hit
        return { author, title, url, points, id }
      })
      dispatch({
        type: ActionType.SET_STORIES,
        payload: { hits, nbPages: data.nbPages },
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${query}&page=${page}`)
  }, [page, query])

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useGlobalContext(): ContextIn {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
