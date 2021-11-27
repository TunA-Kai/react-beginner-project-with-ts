import { FaBars } from 'react-icons/fa'

interface HomeProps {}

function Home({}: HomeProps) {
  return (
    <main>
      <button className='sidebar-toggle'>
        <FaBars />
      </button>
      <button className='btn'>show modal</button>
    </main>
  )
}

export default Home
