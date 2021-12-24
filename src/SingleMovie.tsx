import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './Context'

interface SingleMovieProps {}

interface State {
    status: 'pending' | 'success' | 'error'
    movie?: any
    error?: string
}

const SingleMovie: React.FC<SingleMovieProps> = ({}) => {
    const { id } = useParams()
    const url = `${API_ENDPOINT}&i=${id}`
    const [state, setState] = useState<State>({
        status: 'pending',
        movie: {},
        error: '',
    })
    const { status, movie, error } = state

    useEffect(() => {
        async function fetchMovie(url: string) {
            try {
                const { data } = await axios.get(url)
                if (data.Response === 'False') throw new Error('Wrong film ID')
                console.log(data)
                setState({ status: 'success', movie: data })
            } catch (error: any) {
                setState({ status: 'error', error: error.message })
            }
        }

        fetchMovie(url)
    }, [])

    if (status === 'pending') return <div className='loading'></div>
    if (status === 'error')
        return (
            <div className='page-error'>
                <h1>{error}</h1>
                <Link to='/' className='btn'>
                    back to movies
                </Link>
            </div>
        )

    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
    return (
        <section className='single-movie'>
            <img src={poster} alt={title} />
            <div className='single-movie-info'>
                <h2>{title}</h2>
                <p>{plot}</p>
                <h4>{year}</h4>
            </div>
            <Link to='/' className='btn'>
                back to movies
            </Link>
        </section>
    )
}

export default SingleMovie
