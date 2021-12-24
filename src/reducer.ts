import { ActionType } from './actionType'
import { ActionT, StateT } from './Interface'

export function reducer(state: StateT, action: ActionT): StateT {
    switch (action.type) {
        case ActionType.SET_QUESTIONS: {
            const { questions } = action.payload
            return {
                ...state,
                questions,
                status: 'answerQues',
            }
        }
        case ActionType.DISPLAY_ERROR:
            return {
                ...state,
                error: action.error,
                status: 'error',
            }
        case ActionType.NEXT_QUESTION: {
            let { activeIndex, status, questions } = state
            if (activeIndex === questions.length - 1) {
                status = 'showResult'
            } else activeIndex++

            const correctAns = state.correctAns + (action.answerOfUser ? 1 : 0)
            return {
                ...state,
                activeIndex,
                status,
                correctAns,
            }
        }
        case ActionType.RESTART_QUIZ:
            return {
                ...state,
                status: 'setUpQues',
                activeIndex: 0,
                correctAns: 0,
                questions: [],
            }
        case ActionType.GET_QUESTIONS:
            return {
                ...state,
                status: 'getQues',
            }
    }
}
