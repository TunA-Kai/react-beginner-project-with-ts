import { FollowerIn } from './Interface'

interface FollowerProps {
  follower: FollowerIn
}

const Follower: React.FC<FollowerProps> = ({ follower }) => {
  const { avatar_url, html_url, login } = follower

  return (
    <article className='card'>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url} className='btn' target='_blank' rel='noreferrer'>
        view profile
      </a>
    </article>
  )
}

export default Follower
