import data from './data'
import Article from './Article'
import { useEffect, useState } from 'react'

function App() {
  const [theme, setTheme] = useState('light-theme')

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>overreacted</h1>
          <button
            className='btn'
            onClick={() =>
              setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')
            }
          >
            toggle
          </button>
        </div>
      </nav>
      <section className='articles'>
        {data.map(item => (
          <Article key={item.id} {...item} />
        ))}
      </section>
    </main>
  )
}

export default App
