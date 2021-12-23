import { ActionType } from './actionType'
import { useGlobalContext } from './Context'

interface StoriesProps {}

const Stories: React.FC<StoriesProps> = ({}) => {
  const { isLoading, hits, dispatch } = useGlobalContext()

  if (isLoading) return <div className='loading'></div>

  return (
    <section className='stories'>
      {hits?.map(story => {
        const { id, author, title, url, points } = story
        return (
          <article key={id} className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span>
              {Math.floor(Math.random() * 1000)} comments
            </p>
            <div>
              <a
                href={url}
                className='read-link'
                target='_blank'
                rel='noreferrer'
              >
                read more
              </a>
              <button className='remove-btn' onClick={() => removeStory(id)}>
                remove
              </button>
            </div>
          </article>
        )
      })}
    </section>
  )

  function removeStory(id: string): void {
    dispatch({ type: ActionType.REMOVE_STORY, payload: id })
  }
}

export default Stories
