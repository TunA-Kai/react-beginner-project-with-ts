import { Link } from 'react-router-dom'

interface CategoriesProps {
  categories: string[]
}

function Categories({ categories }: CategoriesProps) {
  return (
    <div className='btn-container'>
      {categories.map(category => (
        <Link to={`/${category}`} key={category}>
          <button className='filter-btn'>{category}</button>
        </Link>
      ))}
    </div>
  )
}

export default Categories
