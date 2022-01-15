import { createContext, Dispatch, ReactNode, useContext, useState } from 'react'

const ShowSidebar = createContext<boolean | undefined>(undefined)
const SetShowSidebar = createContext<
    Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined)

function SidebarContext({ children }: { children: ReactNode }) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <ShowSidebar.Provider value={showSidebar}>
            <SetShowSidebar.Provider value={setShowSidebar}>
                {children}
            </SetShowSidebar.Provider>
        </ShowSidebar.Provider>
    )
}

function useSetShowSidebar() {
    const setShowSidebar = useContext(SetShowSidebar)
    if (setShowSidebar === undefined) {
        throw new Error('Component is not a child of SetShowSidebar Provider')
    }
    const openSidebar = () => setShowSidebar(true)
    const closeSidebar = () => setShowSidebar(false)
    return { openSidebar, closeSidebar }
}

function useShowSidebar() {
    const showSidebar = useContext(ShowSidebar)
    if (showSidebar === undefined) {
        throw new Error('Component is not a child of ShowSidebar Provider')
    }
    return showSidebar
}

export { SidebarContext, useSetShowSidebar, useShowSidebar }
