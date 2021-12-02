import { NavLink } from 'react-router-dom'
import logo from '../logo.svg'

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
