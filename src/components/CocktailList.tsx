import { useGlobalContext } from '../Context'
import Cocktail from './Cocktail'
import Loading from './Loading'

function CocktailList() {
  const { cocktails, status } = useGlobalContext()

  if (status === 'pending') return <Loading />
  if (status === 'rejected')
    return (
      <h2 className='section-title'>
        No cocktails matched your search criteria
      </h2>
    )

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(item => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default CocktailList
