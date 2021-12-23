import { ActionType } from './actionType'
import { ActionT, StateT } from './Interface'

export function reducer(state: StateT, action: ActionT): StateT {
    switch (action.type) {
        case ActionType.SET_QUESTIONS:
            const { questions } = action.payload
            return {
                ...state,
                questions,
                status: 'answerQues',
            }
        case ActionType.DISPLAY_ERROR:
            return {
                ...state,
                error: action.error,
                status: 'error',
            }
    }
}
