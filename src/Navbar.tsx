import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

function Navbar() {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef<HTMLDivElement>(null)
  const linksListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const listHeight = linksListRef.current?.offsetHeight
    if (linksContainerRef.current) {
      linksContainerRef.current.style.height = `${showLinks ? listHeight : 0}px`
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksListRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map(({ id, url, icon }) => (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
