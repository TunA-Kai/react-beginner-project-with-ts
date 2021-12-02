// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:ctId' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
