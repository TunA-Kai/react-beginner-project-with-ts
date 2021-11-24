import { PersonInterface } from './Interface'
import { FaQuoteRight } from 'react-icons/fa'

interface ReviewProps extends PersonInterface {
  className: string
}

function Review({ image, name, title, quote, className }: ReviewProps) {
  return (
    <article className={className}>
      <img src={image} alt={name} className='person-img' />
      <h4>{name}</h4>
      <p className='title'>{title}</p>
      <p className='quote'>{quote}</p>
      <FaQuoteRight className='icon' />
    </article>
  )
}

export default Review
