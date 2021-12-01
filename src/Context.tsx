import {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from 'react'
import cartItems from './data'
import reducer from './reducer'
import { ItemIn } from './Interface'

const URL = 'https://course-api.com/react-useReducer-cart-project'

interface ContextIn {
  cart: ItemIn[]
}

const AppContext = createContext<ContextIn>({} as ContextIn)

const AppProvider = ({ children }: any) => {
  const [cart, setCart] = useState<ItemIn[]>(cartItems)

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }
