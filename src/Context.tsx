import axios from 'axios'
import React, { useState, useContext, useEffect, useReducer } from 'react'
import { ActionType } from './actionType'
import { ContextT, QuestionT, StatusT } from './Interface'
import { reducer } from './reducer'

const table = {
    sports: 21,
    history: 23,
    politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl =
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'

const initialState = {
    status: 'setUpQues' as StatusT,
    questions: [] as QuestionT[],
    activeIndex: 4,
    correctAns: 0,
    error: '',
}

const AppContext = React.createContext({} as ContextT)

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    async function fetchQuestions(url: string): Promise<void> {
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
            dispatch({ type: ActionType.DISPLAY_ERROR, error: error.message })
        }
    }

    useEffect(() => {
        fetchQuestions(tempUrl)
    }, [])

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export function useGlobalContext(): ContextT {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
