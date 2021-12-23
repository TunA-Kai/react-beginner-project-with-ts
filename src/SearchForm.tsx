import { useState } from 'react'
import { ActionType } from './actionType'
import { useGlobalContext } from './Context'

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = ({}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { dispatch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </form>
  )

  function handleSearch(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    dispatch({ type: ActionType.HANDLE_SEARCH, payload: searchTerm })
  }
}

export default SearchForm
