import React from 'react'
import { ActionType } from './actionType'
import { useGlobalContext } from './Context'

interface ButtonsProps {}

const Buttons: React.FC<ButtonsProps> = ({}) => {
  const { dispatch, isLoading, page, nbPages } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button
        disabled={isLoading || page === 0}
        onClick={() => handlePage('dec')}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading || page + 1 === nbPages}
        onClick={() => handlePage('inc')}
      >
        prev
      </button>
    </div>
  )

  function handlePage(action: string): void {
    dispatch({ type: ActionType.HANDLE_PAGE, payload: action })
  }
}

export default Buttons
