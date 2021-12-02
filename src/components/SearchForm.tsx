import { useEffect, useRef } from 'react'
import { useGlobalContext } from '../Context'

function SearchForm() {
  const { setSearchParams } = useGlobalContext()
  const searchValue = useRef<HTMLInputElement>(null)

  function searchCocktail() {
    if (searchValue.current) setSearchParams(searchValue.current.value)
  }

  useEffect(() => {
    searchValue.current?.focus()
  }, [])

  return (
    <section className='section search'>
      <form
        action=''
        className='search-form'
        onSubmit={e => e.preventDefault()}
      >
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
