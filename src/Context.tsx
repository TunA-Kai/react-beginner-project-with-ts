import { createContext, useContext, useRef, useState } from 'react'

interface AppCont {
  showSubmenu: boolean
  showSidebar: boolean
  toggleSubmenu: () => void
  toggleSidebar: () => void
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
  subMenuRef: React.RefObject<HTMLElement>
}

const AppContext = createContext<AppCont>({} as AppCont)

export function AppProvider({ children }: any) {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  const [activeTab, setActiveTab] = useState('')
  const subMenuRef = useRef<HTMLElement>(null)

  const toggleSubmenu = () => setShowSubmenu(prev => !prev)
  const toggleSidebar = () => setShowSidebar(!showSidebar)

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        showSubmenu,
        toggleSidebar,
        toggleSubmenu,
        activeTab,
        setActiveTab,
        subMenuRef,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
