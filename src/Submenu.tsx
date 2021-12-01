import { useGlobalContext } from './Context'
import SubLink from './SubLink'
import sublinks from './data'

function Submenu() {
  const { showSubmenu, activeTab, toggleSubmenu, subMenuRef } =
    useGlobalContext()

  const { links = [] } = sublinks.find(item => item.page === activeTab) || {}

  return (
    <aside
      className={`submenu ${showSubmenu ? 'show' : ''}`}
      onMouseEnter={toggleSubmenu}
      onMouseLeave={toggleSubmenu}
      ref={subMenuRef}
    >
      <div className='submenu-center'>
        {links.map(link => (
          <SubLink link={link} key={Math.random() * Math.pow(10, 6)} />
        ))}
      </div>
    </aside>
  )
}

export default Submenu
