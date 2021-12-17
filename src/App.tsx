import React, { useState, useEffect, useReducer } from 'react'
import { FaSearch } from 'react-icons/fa'
import { PhotoIn } from './Interface'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

enum STATUS {
  PENDING = 'pending',
  SUCCESS = 'success',
  REJECT = 'reject',
}

interface State {
  status: STATUS
  photos: PhotoIn[]
  error?: string
}

const initialState: State = {
  status: STATUS.PENDING,
  photos: [],
}

type ACTION =
  | {
      type: STATUS.PENDING
    }
  | { type: STATUS.SUCCESS; payload: PhotoIn[] }
  | { type: STATUS.REJECT; payload: string }

function reducer(state: State, action: ACTION): State {
  switch (action.type) {
    case STATUS.PENDING:
      return {
        ...state,
        status: STATUS.PENDING,
      }
    case STATUS.SUCCESS:
      return {
        ...state,
        status: STATUS.SUCCESS,
        photos: action.payload,
      }
    case STATUS.REJECT:
      return {
        ...state,
        status: STATUS.REJECT,
        error: action.payload,
      }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { status, photos, error } = state

  async function fetchImages() {
    dispatch({ type: STATUS.PENDING })
    let url = `${mainUrl}${clientID}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      const photosResult: PhotoIn[] = data.map((item: any): PhotoIn => {
        const {
          id,
          urls: { regular },
          alt_description,
          likes,
          user: {
            name,
            porfolio_url,
            profile_image: { medium },
          },
        } = item
        return {
          id,
          regular,
          alt_description,
          likes,
          name,
          porfolio_url,
          medium,
        }
      })
      dispatch({ type: STATUS.SUCCESS, payload: photosResult })
    } catch (error: any) {
      console.log(error)
      dispatch({ type: STATUS.REJECT, payload: error.message })
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='phots'>
        {status === STATUS.REJECT && <h2 className='loading'>{error}</h2>}
        <div className='photos-center'>
          {photos.map(image => {
            return <Photo key={image.id} image={image} />
          })}
        </div>
        {status === STATUS.PENDING && <h2 className='loading'>Loading...</h2>}
      </section>
    </main>
  )
}

export default App
