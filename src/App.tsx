import { useState, useRef } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef<any>()
  const displayTexts = data.slice(0, count)

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form
        className='lorem-form'
        onSubmit={e => {
          e.preventDefault()
          setCount(inputRef.current.value)
        }}
      >
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          ref={inputRef}
          min={1}
          max={8}
          defaultValue={1}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>

      <article className='lorem-text'>
        {displayTexts.map(text => (
          <p key={Math.random() * 100_000}>{text}</p>
        ))}
      </article>
    </section>
  )
}

export default App
