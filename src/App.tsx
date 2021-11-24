import { useEffect, useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { JobInterface } from './Interface'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState<JobInterface[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch(url)
      const newJobs = await res.json()
      setJobs(newJobs)
      setIsLoading(false)
    }

    fetchJobs()
  }, [])

  if (isLoading)
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )

  const { company, dates, duties, title } = jobs[activeTab]
  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(index)}
              className={`job-btn ${index === activeTab ? 'active-btn' : ''}`}
            >
              {item.company}
            </button>
          ))}
        </div>

        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map(duti => (
            <div className='job-desc' key={Math.random() * 100_000}>
              <FaAngleDoubleRight />
              {duti}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default App
