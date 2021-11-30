import { createContext, useContext, useState } from 'react'

interface Context {
  showModal: boolean
  toggleModal: () => void
  toggleSidebar: () => void
  showSidebar: boolean
}

export const AppContext = createContext<Context>({} as Context)

export const AppProvider = ({ children }: any) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function toggleSidebar() {
    setShowSidebar(!showSidebar)
  }

  function toggleModal() {
    setShowModal(!showModal)
  }

  return (
    <AppContext.Provider
      value={{ showModal, toggleModal, showSidebar, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
