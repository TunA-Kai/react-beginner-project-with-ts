import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import data from './data'
import { PersonInterface } from './Interface'
import Review from './Review'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [people, setPeople] = useState<PersonInterface[]>(data)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(handleNext, 2000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => (
          <Review key={person.id} className={setClassName(index)} {...person} />
        ))}
        <button className='prev' onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )

  function handlePrev() {
    setActiveSlide(activeSlide === 0 ? people.length - 1 : activeSlide - 1)
  }

  function handleNext() {
    setActiveSlide(activeSlide === people.length - 1 ? 0 : activeSlide + 1)
  }

  function setClassName(index: number): string {
    if (activeSlide === index) return 'activeSlide'
    if (
      activeSlide + 1 === index ||
      (activeSlide === people.length - 1 && index === 0)
    )
      return 'nextSlide'
    if (
      activeSlide - 1 === index ||
      (activeSlide === 0 && index === people.length - 1)
    )
      return 'lastSlide'
    return ''
  }
}

export default App
