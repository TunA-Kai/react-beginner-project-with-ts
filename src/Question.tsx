import { QuestionInterface } from './Interface'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'

interface QuestionProp extends QuestionInterface {}

function Question({ title, info }: QuestionProp) {
  const [isActive, setIsActive] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsActive(!isActive)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive ? <p>{info}</p> : null}
    </article>
  )
}

export default Question
