import { useContext, useState } from 'react'
import { DeleteContext } from './Context'

export interface TourInterface {
  id: string
  name: string
  info: string
  image: string
  price: string
}

interface TourProps {
  tour: TourInterface
}

const TourDetail: React.FC<TourProps> = ({
  tour: { id, image, info, name, price },
}) => {
  const [readMore, setReadMore] = useState(false)
  const { deleteTour } = useContext(DeleteContext)

  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.split(' ').slice(0, 40).join(' ')}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button className='delete-btn' onClick={() => deleteTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  )
}

export default TourDetail
