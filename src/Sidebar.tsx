import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './Context'

function Sidebar() {
  console.log('Sidebar Renderring')
  const { showSidebar, toggleSidebar } = useGlobalContext()

  return (
    <aside className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <Links />
      <SocialIcons />
    </aside>
  )
}

function Links() {
  return (
    <ul className='links'>
      {links.map(link => {
        const { id, icon, url, text } = link
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function SocialIcons() {
  return (
    <ul className='social-icons'>
      {social.map(link => {
        const { id, url, icon } = link
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}

export default Sidebar
