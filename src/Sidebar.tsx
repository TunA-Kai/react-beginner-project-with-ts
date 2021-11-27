import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
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
    </aside>
  )
}

export default Sidebar
