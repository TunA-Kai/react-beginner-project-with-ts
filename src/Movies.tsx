import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom'

const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies: React.FC = () => {
    const { movies, status } = useGlobalContext()

    if (status === 'GETTING_MOVIES') return <div className='loading'></div>

    return (
        <section className='movies'>
            {movies.map(({ imdbId, poster, title, year }) => (
                <Link to={`/movies/${imdbId}`} key={imdbId} className='movie'>
                    <article>
                        <img
                            src={poster === 'N/A' ? url : poster}
                            alt={title}
                        />
                        <div className='movie-info'>
                            <h4 className='title'>{title}</h4>
                            <p>{year}</p>
                        </div>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default Movies
