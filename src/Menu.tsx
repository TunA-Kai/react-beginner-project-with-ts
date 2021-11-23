import { DishInterface } from './Interface'
import { useParams } from 'react-router-dom'

interface MenuProps {
  items: DishInterface[]
}

function Menu({ items }: MenuProps) {
  const { category } = useParams()
  const displayItems =
    category !== 'all'
      ? items.filter(item => item.category === category)
      : items

  return (
    <div className='section-center'>
      {displayItems.map(({ id, title, img, desc, price }) => (
        <article className='menu-item' key={id}>
          <img src={img + title} alt={title} className='photo' />
          <div className='item-info'>
            <header>
              <h4>{title}</h4>
              <h4>{price}</h4>
            </header>
            <p className='item-text'>{desc}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Menu
