import axios from 'axios'
import { useEffect, useReducer } from 'react'

interface TState {
    status: 'pending' | 'success' | 'reject'
    data?: unknown
    error?: string
}

type TAction =
    | { type: 'GETTING_DATA' }
    | { type: 'GETTING_DATA_SUCCESS'; data: unknown }
    | { type: 'GETTING_DATA_ERROR'; error: string }

function reducer(state: TState, action: TAction): TState {
    switch (action.type) {
        case 'GETTING_DATA':
            return { status: 'pending' }
        case 'GETTING_DATA_SUCCESS':
            return { status: 'success', data: action.data }
        case 'GETTING_DATA_ERROR':
            return { status: 'reject', error: action.error }
    }
}

const initialState = {
    status: 'pending' as const,
    data: null,
}

const { signal, abort } = new AbortController()

function useGetProduct(url: string) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getProduct(url: string) {
            dispatch({ type: 'GETTING_DATA' })
            try {
                const { data } = await axios.get(url, { signal })
                dispatch({ type: 'GETTING_DATA_SUCCESS', data })
            } catch (e: any) {
                const { response, request } = e
                const error = response
                    ? 'The request was made and the server responded with a status code that falls out of the range of 2xx'
                    : request
                    ? 'The request was made but no response was received'
                    : 'Something happened in setting up the request that triggered an Error'
                dispatch({ type: 'GETTING_DATA_ERROR', error })
            }
        }

        getProduct(url)

        return () => abort()
    }, [])

    return { ...state }
}

export { useGetProduct }
