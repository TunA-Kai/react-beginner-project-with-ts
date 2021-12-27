import mockUser from './mockData/mockUser'
import mockRepos from './mockData/mockRepos'
import mockFollowers from './mockData/mockFollowers'
import axios from 'axios'
import { createContext, FC, useContext, useState } from 'react'
import { GithubContextT } from '../types'

const rootUrl = 'https://api.github.com'

const GithubContext = createContext({} as GithubContextT)

const GithubProvider: FC = ({ children }) => {
    const [githubUser, setGithubUser] = useState(mockUser)
    const [repos, setRepos] = useState(mockRepos)
    const [followers, setFollowers] = useState(mockFollowers)

    const context: GithubContextT = { githubUser, repos, followers }

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
