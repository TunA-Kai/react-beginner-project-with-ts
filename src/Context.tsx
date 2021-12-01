import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from 'react'
import cartItems from './data'
import reducer, { calculateDerivedState } from './reducer'
import { stateIn, actionIn } from './Interface'

const URL = 'https://course-api.com/react-useReducer-cart-project'

interface ContextIn extends stateIn {
  dispatch: React.Dispatch<actionIn>
}

const AppContext = createContext<ContextIn>({} as ContextIn)

const initialState: stateIn = {
  status: 'resolved',
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    calculateDerivedState,
  )

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
