import { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './Context'

function Home() {
  console.log('Home renderring')
  const { toggleModal, toggleSidebar } = useContext(AppContext)
  return (
    <main>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={toggleModal}>
        show modal
      </button>
    </main>
  )
}

export default Home
