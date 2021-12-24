import axios from 'axios'
import { useState } from 'react'
import { ActionType } from './actionType'
import { useGlobalContext } from './Context'
import { QuestionT } from './Interface'

const table: { [key: string]: number } = {
    sports: 21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

interface SetupFormProps {}

const SetupForm: React.FC<SetupFormProps> = ({}) => {
    const { status, error, dispatch } = useGlobalContext()
    const [quiz, setQuiz] = useState({
        amount: '50',
        category: 'politics',
        difficulty: 'easy',
    })
    const { amount, category, difficulty } = quiz

    return (
        <main>
            <section className='quiz quiz-small'>
                <form className='setup-form' onSubmit={handleSubmit}>
                    <h2>setup quiz</h2>
                    {/* ----------------- amount ----------------- */}
                    <div className='form-control'>
                        <label htmlFor='amount'>number of questions</label>
                        <input
                            type='number'
                            name='amount'
                            id='amount'
                            className='form-input'
                            min={1}
                            max={50}
                            value={amount}
                            onChange={handleChange}
                        />
                    </div>

                    {/* ---------------- category ---------------- */}
                    <div className='form-control'>
                        <label htmlFor='category'>category</label>
                        <select
                            name='category'
                            id='category'
                            className='form-input'
                            value={category}
                            onChange={handleChange}
                        >
                            <option value='sports'>sports</option>
                            <option value='history'>history</option>
                            <option value='politics'>politics</option>
                        </select>
                    </div>

                    {/* --------------- difficulty --------------- */}
                    <div className='form-control'>
                        <label htmlFor='difficulty'>difficulty</label>
                        <select
                            name='difficulty'
                            id='difficulty'
                            className='form-input'
                            value={difficulty}
                            onChange={handleChange}
                        >
                            <option value='easy'>easy</option>
                            <option value='medium'>medium</option>
                            <option value='hard'>hard</option>
                        </select>
                    </div>

                    {status === 'error' ? (
                        <p className='error'>{error}</p>
                    ) : null}
                    <button type='submit' className='submit-btn'>
                        start
                    </button>
                </form>
            </section>
        </main>
    )

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault()

        const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`

        async function fetchQuestions(url: string): Promise<void> {
            dispatch({ type: ActionType.GET_QUESTIONS })
            try {
                const {
                    data: { results },
                } = await axios.get(url)
                console.log(results)
                if (results.length === 0)
                    throw new Error(
                        'Can not find any questions with these setting.',
                    )

                const questions: QuestionT[] = results.map((q: any) => {
                    const { correct_answer, incorrect_answers, question } = q
                    return {
                        question,
                        answer: correct_answer,
                        wrongAns: incorrect_answers,
                    }
                })
                dispatch({
                    type: ActionType.SET_QUESTIONS,
                    payload: { questions: questions },
                })
            } catch (error: any) {
                dispatch({
                    type: ActionType.DISPLAY_ERROR,
                    error: error.message,
                })
            }
        }

        fetchQuestions(url)
    }

    function handleChange(
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    ): void {
        const { value, name } = e.target
        setQuiz({ ...quiz, [name]: value })
    }
}

export default SetupForm
