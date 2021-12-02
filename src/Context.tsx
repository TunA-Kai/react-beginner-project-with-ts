import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from 'react'
import cartItems from './data'
import reducer, { calculateDerivedState } from './reducer'
import { stateIn, actionIn, ItemIn } from './Interface'

const URL = 'https://course-api.com/react-useReducer-cart-project'

interface ContextIn extends stateIn {
  dispatch: React.Dispatch<actionIn>
}

const AppContext = createContext<ContextIn>({} as ContextIn)

const initialState: stateIn = {
  status: 'pending',
  cart: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    calculateDerivedState,
  )

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(URL)
        if (!response.ok) throw new Error()
        const data: ItemIn[] = await response.json()

        dispatch({ status: 'resolved', cart: data })
      } catch (error) {
        dispatch({ status: 'rejected' })
      }
    }
    getData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }
