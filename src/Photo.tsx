import { PhotoIn } from './Interface'

interface PhotoProps {
  image: PhotoIn
}

const Photo: React.FC<PhotoProps> = ({ image }) => {
  const { regular, alt_description, name, likes, porfolio_url, medium } = image
  return (
    <article className='photo'>
      <img src={regular} alt={alt_description} />
      <div className='photo-info'>
        <div>
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <a href={porfolio_url}>
          <img src={medium} alt={name} className='user-img' />
        </a>
      </div>
    </article>
  )
}

export default Photo
