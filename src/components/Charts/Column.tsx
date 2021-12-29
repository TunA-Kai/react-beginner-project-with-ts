import { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useGithubContext } from '../../context/context'
import { backgroundColor, borderColor, createChartOptions } from './barOptions'

const options = createChartOptions('x', 'Repo name', 'Stars', 'Most popular')

interface ColumnProps {}
interface RepoStars {
    name: string
    stargazers_count: number
}

const Column: React.FC<ColumnProps> = ({}) => {
    const { repos }: { repos: RepoStars[] } = useGithubContext()
    const repoStars = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)

    const data: ChartData<'bar', number[], string> = {
        labels: repoStars.map(({ name }) => name),
        datasets: [
            {
                label: 'stars',
                data: repoStars.map(({ stargazers_count }) => stargazers_count),
                backgroundColor,
                borderColor,
                borderWidth: 1,
            },
        ],
    }

    return (
        <div
            style={{
                position: 'relative',
                maxWidth: '60vw',
                backgroundColor: 'white',
                display: 'grid',
                placeContent: 'center',
            }}
        >
            <Bar data={data} options={options} />
        </div>
    )
}

export default Column
