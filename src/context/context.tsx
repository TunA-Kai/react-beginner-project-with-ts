import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import axios from 'axios'
import { createContext, FC, useContext, useEffect, useState } from 'react'
import { GithubContextT } from '../types'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext({} as GithubContextT)

const GithubProvider: FC = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)
    const [remainRequest, setRemainRequest] = useState(60)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const context: GithubContextT = {
        githubUser,
        repos,
        followers,
        remainRequest,
        error,
        searchGithubUser,
        loading,
    }

    async function searchGithubUser(user: string) {
        setLoading(true)
        setError('')
        try {
            const { data } = await axios.get(`${rootUrl}/users/${user}`)
            const { login, followers_url } = data
            const [{ data: repos }, { data: followers }] = await Promise.all([
                axios.get(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios.get(`${followers_url}?per_page=100`),
            ])
            setGithubUser(data)
            setFollowers(followers)
            setRepos(repos)
            setError('')
        } catch (error: any) {
            setError('Cannot find user with that username')
        } finally {
            setLoading(false)
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
            // console.log(remaining)
            setRemainRequest(remaining)
            if (remaining === 0)
                throw new Error('There is no request left 💥💥💥')
            // setError('')
        } catch (error: any) {
            setError(error.message)
        } finally {
            setLoading(false)
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
