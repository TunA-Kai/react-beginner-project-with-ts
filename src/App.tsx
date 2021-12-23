import { useGlobalContext } from './Context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import { shuffle, stringToHTML } from './helper'
import { ActionType } from './actionType'

function App() {
    const { status, questions, activeIndex, correctAns, dispatch } =
        useGlobalContext()

    if (status === 'setUpQues') return <SetupForm />
    if (status === 'getQues') return <Loading />

    const { answer, wrongAns, question } = questions[activeIndex]
    const answers = shuffle([...wrongAns, answer]).map(stringToHTML)

    return (
        <main>
            <Modal />
            <section className='quiz'>
                <p className='correct-answers'>
                    correct answers : {correctAns}/{activeIndex}
                </p>
                <article className='container'>
                    <h2>{stringToHTML(question)}</h2>
                    <div className='btn-container'>
                        {answers.map(ans => (
                            <button
                                key={ans}
                                className='answer-btn'
                                onClick={() => answeringQues(ans)}
                            >
                                {ans}
                            </button>
                        ))}
                    </div>
                </article>
                <button className='next-question' onClick={nextQuestion}>
                    next question
                </button>
            </section>
        </main>
    )

    function answeringQues(ans: string): void {
        dispatch({
            type: ActionType.NEXT_QUESTION,
            answerOfUser: ans === stringToHTML(answer),
        })
    }

    function nextQuestion(): void {
        dispatch({ type: ActionType.NEXT_QUESTION })
    }
}

export default App
