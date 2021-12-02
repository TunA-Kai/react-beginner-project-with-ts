import { Link } from 'react-router-dom'
import { DrinkIn } from '../Interface'

interface CocktailProps extends DrinkIn {}

function Cocktail({ id, image, info, glass, name }: CocktailProps) {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link className='btn btn-primary btn-details' to={`/cocktail/${id}`}>
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
