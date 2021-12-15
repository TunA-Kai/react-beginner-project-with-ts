import { useState } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
import { FollowerIn } from './Interface'

function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)

  const followers = data[page] || []

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map(
            (follower: FollowerIn): JSX.Element => (
              <Follower key={follower.id} follower={follower} />
            ),
          )}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button
              className='prev-btn'
              onClick={() => setPage(page === 0 ? data.length - 1 : page - 1)}
            >
              prev
            </button>
            {data.map(
              (_, index: number): JSX.Element => (
                <button
                  className={`page-btn ${index === page ? 'active-btn' : ''}`}
                  onClick={() => setPage(index)}
                >
                  {index + 1}
                </button>
              ),
            )}
            <button
              className='next-btn'
              onClick={() => setPage(page === data.length - 1 ? 0 : page + 1)}
            >
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
