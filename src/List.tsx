import { FaEdit, FaTrash } from 'react-icons/fa'
import { ItemInterface, AlertInterface } from './Interface'

interface ListProps {
  items: ItemInterface[]
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[]>>
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  setupAlert: ({ show, type, msg }: AlertInterface) => void
  inputItemRef: React.MutableRefObject<any>
  setEditID: React.Dispatch<React.SetStateAction<number | undefined>>
}

function List({
  items,
  setItems,
  setupAlert,
  setIsEditing,
  inputItemRef,
  setEditID,
}: ListProps) {
  return (
    <div className='grocery-list'>
      {items.map(({ id, title }) => (
        // can extract to be a separate component
        <article className='grocery-item' key={id}>
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button className='edit-btn' onClick={() => handleEdit(id, title)}>
              <FaEdit />
            </button>
            <button className='delete-btn' onClick={() => handleDelete(id)}>
              <FaTrash />
            </button>
          </div>
        </article>
      ))}
    </div>
  )

  function handleDelete(id: number) {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)
    setupAlert({ show: true, type: 'danger', msg: 'item removed' })
  }

  function handleEdit(id: number, title: string) {
    setIsEditing(true)
    setEditID(id)
    inputItemRef.current.value = title
  }
}

export default List
