import { useGlobalContext } from './Context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { status } = useGlobalContext()
  if (status === 'pending') {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (status === 'rejected') {
    return (
      <div className='loading'>
        <h1>There is an error</h1>
      </div>
    )
  }

  // if status === 'resolved'
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
