import TourDetail, { TourInterface } from './Tour'

interface ToursProps {
  tours: TourInterface[]
}

const Tours: React.FC<ToursProps> = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map(tour => (
          <TourDetail key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default Tours
