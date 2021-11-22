import { useEffect, useState } from 'react'
import Loading from './Loading'
import { TourInterface } from './Tour'
import Tours from './Tours'
import { DeleteContext } from './Context'
const URL = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState<TourInterface[]>([])

  useEffect(() => {
    async function fetchTours() {
      const response = await fetch(URL)
      const tours = await response.json()
      setTours(tours)
      setLoading(false)
    }

    fetchTours()
  }, [])

  return (
    <main>
      <DeleteContext.Provider value={{ deleteTour }}>
        {loading ? (
          <Loading />
        ) : tours.length > 0 ? (
          <Tours tours={tours} />
        ) : (
          <div className='title'>
            <h2>No Tours Left</h2>
            <button onClick={() => window.location.reload()} className='btn'>
              Refresh
            </button>
          </div>
        )}
      </DeleteContext.Provider>
    </main>
  )

  function deleteTour(id: string) {
    setTours(tours.filter(tour => tour.id !== id))
  }
}

export default App
