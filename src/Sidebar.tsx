import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data'
import SubLink from './SubLink'

function Sidebar() {
  const { showSidebar, toggleSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar-wrapper ${showSidebar ? 'show' : ''}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <SidebarLinks />
      </div>
    </aside>
  )
}

function SidebarLinks() {
  return (
    <div className='sidebar-links'>
      {sublinks.map(item => {
        const { page, links } = item
        return (
          <article key={Math.random() * Math.pow(10, 6)}>
            <h4>{page}</h4>
            <div className='sidebar-sublinks'>
              {links.map(link => (
                <SubLink link={link} key={Math.random() * Math.pow(10, 6)} />
              ))}
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Sidebar
