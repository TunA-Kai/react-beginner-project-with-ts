import items from './data'
import Menu from './Menu'
import Categories from './Categories'
import { DishInterface } from './Interface'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [menuItems, setMenuItems] = useState<DishInterface[]>(items)
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    const setCategory = new Set(menuItems.map(item => item.category))
    setCategories(['all', ...setCategory])
  }, [menuItems])

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <Link to='/'>
            <h2>our menu</h2>
          </Link>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} />
        <Routes>
          <Route
            path='/'
            element={
              <h2 style={{ textAlign: 'center' }}>
                Click a category to see items
              </h2>
            }
          />
          <Route path='/:category' element={<Menu items={menuItems} />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
