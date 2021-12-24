import { useState } from 'react'
import { useGlobalContext } from './Context'
import { ActionType } from './Interface'

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = ({}) => {
    const { query, error, status, dispatch } = useGlobalContext()
    const [input, setInput] = useState(query)

    return (
        <form className='search-form' onSubmit={handleSubmit}>
            <h2>search movies</h2>
            <input
                type='text'
                className='form-input'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            {status === 'ERROR' ? <div className='error'>{error}</div> : null}
        </form>
    )

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        dispatch({ type: ActionType.GET_MOVIES, query: input })
    }
}

export default SearchForm
