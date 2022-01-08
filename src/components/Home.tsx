import { Link } from 'react-router-dom'

interface HomeProps {}

function Home({}: HomeProps) {
    return (
        <div className='home container'>
            <h2>Welcome to Pizza Joint</h2>
            <Link to='/base'>
                <button>Create Your Pizza</button>
            </Link>
        </div>
    )
}

export default Home
