import { ChartOptions, ChartData } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useGithubContext } from '../../context/context'
import { backgroundColor, borderColor, createChartOptions } from './barOptions'

const options = createChartOptions('y', 'Forks', 'Repo name', 'Most forked')

interface BarChartProps {}
interface RepoForks {
    name: string
    forks: number
}

const BarChart: React.FC<BarChartProps> = ({}) => {
    const { repos }: { repos: RepoForks[] } = useGithubContext()
    const repoStars = repos.sort((a, b) => b.forks - a.forks).slice(0, 5)

    const data: ChartData<'bar', number[], string> = {
        labels: repoStars.map(({ name }) => name),
        datasets: [
            {
                label: 'forks',
                data: repoStars.map(({ forks }) => forks),
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

export default BarChart
