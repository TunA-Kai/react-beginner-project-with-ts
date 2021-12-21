import { DataIn } from './Interface'

interface ArticleProps extends DataIn {}

const Article: React.FC<ArticleProps> = ({ title, snippet, date, length }) => {
  const dateString = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date)

  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
        <span>{dateString}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  )
}

export default Article
