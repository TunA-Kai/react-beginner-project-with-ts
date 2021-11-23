interface CategoriesProps {
  categories: string[]
  setChooseCategory: React.Dispatch<React.SetStateAction<string>>
}

function Categories({ categories, setChooseCategory }: CategoriesProps) {
  return (
    <div className='btn-container'>
      {categories.map(category => (
        <button
          key={category}
          className='filter-btn'
          onClick={() => setChooseCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
