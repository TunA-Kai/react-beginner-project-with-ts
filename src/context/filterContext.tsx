import { createContext, ReactNode, useContext } from 'react'

const initialState = {}

const FilterContext = createContext<{} | undefined>(undefined)

function FilterProvider({ children }: { children: ReactNode }) {
    return <FilterContext.Provider value={undefined}>{children}</FilterContext.Provider>
}

function useFilterContext() {
    const context = useContext(FilterContext)
    if (context === undefined) {
        throw new Error('This component is not a child of FilterProvider')
    }
    return context
}

export { useFilterContext, FilterProvider }
