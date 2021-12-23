import { useGlobalContext } from './Context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
import { shuffle, stringToHTML } from './helper'

function App() {
    const { status, questions, activeIndex, correctAns } = useGlobalContext()

    if (status === 'setUpQues') return <SetupForm />
    if (status === 'getQues') return <Loading />

    const { answer, wrongAns, question } = questions[activeIndex]
    const answers = shuffle([...wrongAns, answer]).map(stringToHTML)

    return (
        <main>
            {/* <Modal /> */}
            <section className='quiz'>
                <p className='correct-answers'>
                    correct answers : {correctAns}/{activeIndex}
                </p>
                <article className='container'>
                    <h2>{stringToHTML(question)}</h2>
                    <div className='btn-container'>
                        {answers.map(ans => (
                            <button key={ans} className='answer-btn'>
                                {ans}
                            </button>
                        ))}
                    </div>
                </article>
                <button className='next-question'>next question</button>
            </section>
        </main>
    )
}

export default App
