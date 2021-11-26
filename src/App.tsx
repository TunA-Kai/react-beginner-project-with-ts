import List from './List'
import Alert from './Alert'
import { useRef, useState } from 'react'

function App() {
  const [items, setItems] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const inputItemRef = useRef<any>()

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            ref={inputItemRef}
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
      <Alert />
    </section>
  )

  function handleSubmit(e) {
    e.preventdefault()
  }
}

export default App
