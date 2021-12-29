export interface GithubContextT {
    githubUser: any
    repos: any
    followers: any
    remainRequest: number
    error: string
    loading: boolean
    searchGithubUser(user: string): Promise<void>
}
