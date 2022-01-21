import { createContext, ReactNode, useContext, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '../firebase.config'

const UserContext = createContext<User | null | undefined>(undefined)

function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    onAuthStateChanged(auth, user => {
        setUser(user)
    })
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

function useUserContext() {
    const user = useContext(UserContext)
    if (user === undefined) {
        throw new Error('This component is not a child of UserProvider')
    }
    return user
}

export { useUserContext, UserProvider }
