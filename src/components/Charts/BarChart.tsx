import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useGithubContext } from '../../context/context'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    layout: {
        padding: {
            left: 20,
            right: 20,
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Forks',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
        },
        y: {
            title: {
                display: true,
                text: 'Repo name',
                color: '#000',
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Most Forked',
            color: '#000',
            padding: {
                bottom: 20,
            },
            font: {
                size: 25,
            },
        },
    },
}

interface BarChartProps {}
interface RepoForks {
    name: string
    forks: number
}

const BarChart: React.FC<BarChartProps> = ({}) => {
    const { repos } = useGithubContext()
    const repoStars: RepoForks[] = repos
        .map(({ name, forks }: { name: string; forks: string }) => ({
            name,
            forks,
        }))
        .sort((a: RepoForks, b: RepoForks) => b.forks - a.forks)
        .slice(0, 5)

    const data: ChartData<'bar', number[], string> = {
        labels: repoStars.map(({ name }) => name),
        datasets: [
            {
                label: 'forks',
                data: repoStars.map(({ forks }) => forks),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                ],
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
