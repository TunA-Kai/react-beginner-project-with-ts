export type StatusT =
    | 'setUpQues'
    | 'getQues'
    | 'answerQues'
    | 'failFetch'
    | 'showResult'

export interface StateT {
    status: StatusT
    questions: QuestionT[]
    activeIndex: number
    correctAns: number
    error?: string
}

export type ActionT = {}

export interface ContextT extends StateT {
    dispatch: React.Dispatch<ActionT>
}

export interface QuestionT {}
