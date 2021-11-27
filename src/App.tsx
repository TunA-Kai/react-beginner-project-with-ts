import List from './List'
import Alert from './Alert'
import { ItemInterface, AlertInterface } from './Interface'
import { useRef, useState } from 'react'

function App() {
  const [items, setItems] = useState<ItemInterface[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState<number>()
  const [alert, setAlert] = useState<AlertInterface>({
    show: false, // don't use for anything
    msg: '',
    type: '',
  })
  const inputItemRef = useRef<any>() // can use another useState instead of useRef

  return (
    <section className='section-center'>
      <Alert {...alert} setupAlert={setupAlert} />
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
      {items.length > 0 && (
        <div className='grocery-container'>
          <List
            items={items}
            setItems={setItems}
            setupAlert={setupAlert}
            setIsEditing={setIsEditing}
            inputItemRef={inputItemRef}
            setEditID={setEditID}
          />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const item: string = inputItemRef.current.value.trim()
    if (!item) {
      setupAlert({ show: true, msg: 'please enter value', type: 'danger' })
      return
    }
    if (isEditing) {
      setItems(
        items.map(it => (it.id === editID ? { id: it.id, title: item } : it)),
      )
      setupAlert({ show: true, type: 'success', msg: 'edited item' })
      setIsEditing(false)
      inputItemRef.current.value = ''
      return
    }
    if (!isEditing) {
      setupAlert({ show: true, type: 'success', msg: 'item added to the list' })
      const newItem: ItemInterface = {
        id: Math.floor(Math.random() * 100_000),
        title: item,
      }
      setItems([...items, newItem])
      inputItemRef.current.value = ''
    }
  }

  function setupAlert({ show = false, type = '', msg = '' }: AlertInterface) {
    setAlert({ show, msg, type })
  }

  function clearList() {
    setupAlert({ show: true, type: 'danger', msg: 'empty list' })
    setItems([])
  }
}

export default App
