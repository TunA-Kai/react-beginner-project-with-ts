import items from './data'
import Menu from './Menu'
import Categories from './Categories'
import { useEffect, useState } from 'react'
import { DishInterface } from './Interface'

function App() {
  const [menuItems, setMenuItems] = useState<DishInterface[]>(items)
  const [categories, setCategories] = useState<string[]>([])
  const [chooseCategory, setChooseCategory] = useState('all')

  useEffect(() => {
    const setCategory = new Set(menuItems.map(item => item.category))
    setCategories(['all', ...setCategory])
  }, [menuItems])

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          setChooseCategory={setChooseCategory}
        />
        <Menu items={menuItems} chooseCategory={chooseCategory} />
      </section>
    </main>
  )
}

export default App
