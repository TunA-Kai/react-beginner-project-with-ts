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
  page: number
}

const initialState: State = {
  status: STATUS.PENDING,
  photos: [],
  page: 1,
}

type ACTION =
  | { type: STATUS.PENDING; payload?: number }
  | { type: STATUS.SUCCESS; payload: PhotoIn[] }
  | { type: STATUS.REJECT; payload: string }

function reducer(state: State, action: ACTION): State {
  switch (action.type) {
    case STATUS.PENDING:
      return {
        ...state,
        status: STATUS.PENDING,
        page: action.payload ?? state.page,
      }
    case STATUS.SUCCESS:
      return {
        ...state,
        status: STATUS.SUCCESS,
        photos: state.photos.concat(action.payload),
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
  const { status, photos, error, page } = state

  useEffect(() => {
    fetchImages()
  }, [page])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [status])

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
      <section className='photos'>
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

  /* ---------------- FUNCTIONS --------------- */
  async function fetchImages(): Promise<void> {
    dispatch({ type: STATUS.PENDING })
    const ulrPage = `&page=${page}`
    let url = `${mainUrl}${clientID}${ulrPage}`
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

  function handleSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    e.preventDefault()
  }

  function handleScroll(): void {
    if (
      status !== STATUS.PENDING &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
    ) {
      dispatch({ type: STATUS.PENDING, payload: page + 1 })
    }
  }
}

export default App
