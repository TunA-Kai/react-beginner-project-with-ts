import { ActionType } from './actionType'
import { useGlobalContext } from './Context'

interface ModalProps {}

const Modal: React.FC<ModalProps> = ({}) => {
    const { status, dispatch, correctAns, questions } = useGlobalContext()

    return (
        <div
            className={`${
                status === 'showResult' ? 'isOpen' : ''
            } modal-container`}
        >
            <div className='modal-content'>
                <h2>congrats!</h2>
                <p>
                    You answered{' '}
                    {Math.floor((correctAns / questions.length) * 100)}% of
                    questions correctly
                </p>
                <button className='close-btn' onClick={restartQuiz}>
                    play again
                </button>
            </div>
        </div>
    )

    function restartQuiz(): void {
        dispatch({ type: ActionType.RESTART_QUIZ })
    }
}

export default Modal
