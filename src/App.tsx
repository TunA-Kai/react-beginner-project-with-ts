import { useReducer } from 'react'
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
  [key: string]: string
  image: string
  phone: string
  email: string
  password: string
  age: string
  street: string
  name: string
}

interface State {
  loading: boolean
  person: null | User
  title: string
  value: string
  msg?: string
}

const initialValue = {
  loading: true,
  person: null,
  title: 'name',
  value: 'random person',
}

function reducer(
  state: State,
  { type, payload }: { type: string; payload: any },
): State {
  switch (type) {
    case 'RESOLVE':
      return {
        ...state,
        loading: false,
        ...payload,
      }
    case 'REJECT':
      return {
        ...state,
        loading: false,
        msg: payload.msg,
      }
    case 'PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'HOVERRING':
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const { loading, person, title, value, msg } = state

  async function getPerson() {
    dispatch({ type: 'PENDING', payload: 'nothing here' })
    try {
      const response = await fetch(URL)
      if (!response.ok) throw new Error(`Cannot load data from ${URL} 🎃🎃🎃`)

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

      const newPerson: User = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
      }
      dispatch({
        type: 'RESOLVE',
        payload: { person: newPerson, title: 'name', value: newPerson.name },
      })
    } catch (error: any) {
      dispatch({
        type: 'REJECT',
        payload: { msg: error.message },
      })
    }
  }

  useEffect(() => {
    getPerson()
  }, [])

  if (msg) return <h1>{msg}</h1>

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
    if (e.currentTarget.classList.contains('icon')) {
      const newValue = e.currentTarget.dataset.label
      if (newValue && person) {
        dispatch({
          type: 'HOVERRING',
          payload: { title: newValue, value: person[newValue] },
        })
      }
    }
  }
}

export default App
