import { ActionType } from './actionType'

export type StatusT =
    | 'setUpQues'
    | 'getQues'
    | 'answerQues'
    | 'error'
    | 'showResult'

export interface StateT {
    status: StatusT
    questions: QuestionT[]
    activeIndex: number
    correctAns: number
    error: string
}

export type ActionT =
    | {
          type: ActionType.SET_QUESTIONS
          payload: { questions: QuestionT[] }
      }
    | {
          type: ActionType.DISPLAY_ERROR
          error: string
      }
    | {
          type: ActionType.NEXT_QUESTION
          answerOfUser?: Boolean
      }
    | {
          type: ActionType.RESTART_QUIZ
      }
    | {
          type: ActionType.GET_QUESTIONS
      }

export interface ContextT extends StateT {
    dispatch: React.Dispatch<ActionT>
}

export interface QuestionT {
    question: string
    answer: string
    wrongAns: Array<string>
}
