import Movies from './Movies'
import SearchForm from './SearchForm'

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
    return (
        <main>
            <SearchForm />
            <Movies />
        </main>
    )
}

export default Home
