import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'
import { useState } from 'react'

function Review() {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={() => setIndex(index + 1)}
          disabled={index === people.length - 1}
        >
          <FaChevronRight />
        </button>
        <div className='random-btn' onClick={handleRandom}>
          suprise me
        </div>
      </div>
    </article>
  )

  function handleRandom() {
    let randomNum: number
    do {
      randomNum = Math.floor(Math.random() * people.length)
    } while (randomNum === index)
    setIndex(randomNum)
  }
}

export default Review
