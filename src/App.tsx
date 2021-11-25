import SingleColor from './SingleColor'
import Values from 'values.js'
import { useState, useRef } from 'react'

function App() {
  const [color, setColor] = useState('#f15025')
  const inputRef = useRef<any>()
  let colorList: any[]

  try {
    colorList = new Values(color).all(10)
    console.log(colorList)
  } catch (error) {
    colorList = []
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            defaultValue='#f15025'
            ref={inputRef}
            className={colorList.length > 0 ? undefined : 'error'}
          />
          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colorList.map(color => (
          <SingleColor key={Math.random() * 100_000} color={color} />
        ))}
      </section>
    </>
  )

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setColor(inputRef.current.value)
  }
}

export default App
