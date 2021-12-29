import { Info, Navbar, Repos, Search, User } from '../components'
import { useGithubContext } from '../context/context'
import { ReactComponent as Spinner } from '../images/spinner.svg'

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
    const { loading } = useGithubContext()

    if (loading) {
        return (
            <main>
                <Navbar />
                <Search />
                <Spinner className='loading-img' />
            </main>
        )
    }

    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
            <Repos />
        </main>
    )
}

export default Dashboard
