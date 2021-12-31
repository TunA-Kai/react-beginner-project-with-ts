import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import axios from 'axios'
import { createContext, FC, useContext, useEffect, useReducer } from 'react'
import { GithubContextT, TAction, TStatus } from '../types'
import { githubReducer } from './reducer'
import { useNavigate } from 'react-router-dom'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext({} as GithubContextT)

const initialState = {
    githubUser: mockUser,
    repos: mockRepos,
    followers: mockFollowers,
    remainRequest: 60,
    status: 'idle' as TStatus,
    error: '',
    isAuth: localStorage.getItem('isAuth') === 'true',
}

const GithubProvider: FC = ({ children }) => {
    const [githubState, dispatch] = useReducer(githubReducer, initialState)

    const navigate = useNavigate()

    const context: GithubContextT = {
        ...githubState,
        dispatch,
        searchGithubUser,
    }

    async function searchGithubUser(user: string) {
        dispatch({ type: TAction.GET_DATA })
        try {
            const { data } = await axios.get(`${rootUrl}/users/${user}`)
            const { login, followers_url } = data
            const [{ data: repos }, { data: followers }] = await Promise.all([
                axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios.get(`${followers_url}?per_page=100`),
            ])
            dispatch({
                type: TAction.SHOW_DATA,
                payload: { githubUser: data, repos, followers },
            })
        } catch (error: any) {
            if (error.response) {
                dispatch({
                    type: TAction.SHOW_ERROR,
                    payload: {
                        error: `Cannot find any user with username: ${user}`,
                    },
                })
            }
        } finally {
            checkRequests()
        }
    }

    async function checkRequests() {
        try {
            const {
                data: {
                    rate: { remaining },
                },
            } = await axios.get(`${rootUrl}/rate_limit`)
            if (remaining === 0)
                throw new Error('There is no request left 💥💥💥')
            dispatch({ type: TAction.UPDATE_REQUEST, remainRequest: remaining })
        } catch (error: any) {
            dispatch({
                type: TAction.SHOW_ERROR,
                payload: {
                    isRunoutRequest: true,
                    error: error.message,
                },
            })
        }
    }

    useEffect(() => {
        checkRequests()
    }, [])

    return (
        <GithubContext.Provider value={context}>
            {children}
        </GithubContext.Provider>
    )
}

function useGithubContext(): GithubContextT {
    return useContext(GithubContext)
}

export { GithubContext, GithubProvider, useGithubContext }
