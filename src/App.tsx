import { useEffect, useState } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const URL = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

const userIcon: { [key: string]: JSX.Element } = {
  name: <FaUser />,
  email: <FaEnvelopeOpen />,
  age: <FaCalendarTimes />,
  street: <FaMap />,
  phone: <FaPhone />,
  password: <FaLock />,
}

interface User {
  image: string
  phone: string
  email: string
  password: string
  age: string
  street: string
  name: string
}

function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState<User | null>(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')

  async function getPerson() {
    const response = await fetch(URL)
    const data = await response.json()

    const [person] = data.results
    const {
      phone,
      email,
      login: { password },
      dob: { age },
      picture: { large: image },
      name: { first, last },
      location: {
        street: { number, name },
      },
    } = person

    const newPerson = {
      image,
      phone,
      email,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    }

    setLoading(false)
    setPerson(newPerson)
    setTitle('name')
    setValue(newPerson.name)
  }

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img
            src={person ? person.image : defaultImage}
            alt='random user'
            className='user-img'
          />
          <p className='user-title'>my {title} is</p>
          <p className='user-value'>{value}</p>
          <div className='values-list'>
            {Object.keys(userIcon).map(key => (
              <button
                key={key}
                className='icon'
                data-label={key}
                onMouseEnter={handleValue}
              >
                {userIcon[key]}
              </button>
            ))}
          </div>
          <button className='btn' type='button' onClick={getPerson}>
            {loading ? 'loading...' : 'random user'}
          </button>
        </div>
      </div>
    </main>
  )

  function handleValue(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    console.dir(e.target)
  }
}

export default App
