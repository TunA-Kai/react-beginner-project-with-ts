import { Info, Navbar, Repos, Search, User } from '../components'

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
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
