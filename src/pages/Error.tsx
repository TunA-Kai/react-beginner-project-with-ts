import { Link } from 'react-router-dom'

interface ErrorProps {}

function Error({}: ErrorProps) {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>oops! its's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
