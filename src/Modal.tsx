import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

function Modal() {
  console.log('Modal renderring')
  const { showModal, toggleModal } = useGlobalContext()

  return (
    <div className={`modal-overlay ${showModal ? 'show-modal' : ''}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={toggleModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
