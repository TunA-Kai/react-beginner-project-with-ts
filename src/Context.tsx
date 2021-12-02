import { createContext, useContext, useEffect, useState } from 'react'
import { DrinkIn } from './Interface'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

interface ContextIn {
  status: string
  cocktails: any[]
  searchParams: string
  setSearchParams: React.Dispatch<React.SetStateAction<string>>
}

const AppContext = createContext({} as ContextIn)

function AppProvider({ children }: any) {
  const [status, setStatus] = useState('pending')
  const [cocktails, setCocktails] = useState<DrinkIn[]>([])
  const [searchParams, setSearchParams] = useState('margarita')

  useEffect(() => {
    async function fetchDrinks() {
      try {
        setStatus('pending')
        const res = await fetch(`${URL}${searchParams}`)
        if (!res.ok) throw new Error('Cannot fetch data from server')
        const { drinks } = await res.json()
        if (drinks) {
          console.log(drinks)
          const newCocktails = drinks.map((item: any) => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            }
          })
          setCocktails(newCocktails)
          setStatus('resolved')
        } else throw new Error('Invalid searchParams')
      } catch (error) {
        console.log(error)
        setStatus('rejected')
      }
    }

    fetchDrinks()
  }, [searchParams])

  return (
    <AppContext.Provider
      value={{ status, cocktails, searchParams, setSearchParams }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
