import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import { useRef } from 'react'

function Navbar() {
  const { toggleSidebar, toggleSubmenu, setActiveTab, subMenuRef } =
    useGlobalContext()
  // can use useRef || e.target of onMouseEnter event
  const productRef = useRef<HTMLButtonElement>(null)
  const developersRef = useRef<HTMLButtonElement>(null)
  const companyRef = useRef<HTMLButtonElement>(null)

  function getPosition(ref: React.RefObject<HTMLElement>) {
    const { left, right } = ref.current?.getBoundingClientRect() || {}
    if (left && right) {
      const subMenuLeft = (right - left) / 2 + left
      if (subMenuRef.current) {
        subMenuRef.current.style.left = `${subMenuLeft}px`
      }
    }
  }

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button
              className='link-btn'
              onMouseEnter={() => {
                toggleSubmenu()
                setActiveTab('products')
                getPosition(productRef)
              }}
              onMouseLeave={toggleSubmenu}
              ref={productRef}
            >
              products
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseEnter={() => {
                toggleSubmenu()
                setActiveTab('developers')
                getPosition(developersRef)
              }}
              onMouseLeave={toggleSubmenu}
              ref={developersRef}
            >
              developers
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseEnter={() => {
                toggleSubmenu()
                setActiveTab('company')
                getPosition(companyRef)
              }}
              onMouseLeave={toggleSubmenu}
              ref={companyRef}
            >
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
