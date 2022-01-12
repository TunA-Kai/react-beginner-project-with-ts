import { createContext, ReactNode, useContext } from 'react'

const UserContext = createContext(undefined)

function UserProvider({ children }: { children: ReactNode }) {
    return (
        <UserContext.Provider value={undefined}>
            {children}
        </UserContext.Provider>
    )
}

function useUserContext() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('This component is not a child of UserProvider')
    }
    return context
}

export { useUserContext, UserProvider }
