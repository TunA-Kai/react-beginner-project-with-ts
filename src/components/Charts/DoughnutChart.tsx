import { ChartOptions, ChartData } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useGithubContext } from '../../context/context'

const options: ChartOptions<'doughnut'> = {
    plugins: {
        title: {
            display: true,
            text: 'Stars Per Language',
            color: '#000',
            font: {
                size: 24,
            },
            padding: 20,
        },
        tooltip: {
            callbacks: {
                label(context) {
                    // console.log(context)
                    const { formattedValue } = context
                    return `${formattedValue} stars`
                },
                title(context) {
                    const { label } = context[0]
                    return label
                },
            },
        },
        legend: {
            position: 'bottom',
            title: {
                display: true,
                padding: 10,
            },
        },
    },
}

interface DoughnutChartProps {}

const DoughnutChart: React.FC<DoughnutChartProps> = ({}) => {
    const { repos } = useGithubContext()
    const languageStars: { [key: string]: number } = {}
    repos.forEach(
        ({
            language,
            stargazers_count: stars,
        }: {
            stargazers_count: string
            language: string
        }) => {
            if (!language) return

            languageStars[language]
                ? (languageStars[language] += Number(stars))
                : (languageStars[language] = 1)
        },
    )

    const data: ChartData<'doughnut', number[], string> = {
        labels: Object.keys(languageStars),
        datasets: [
            {
                label: '# of Stars',
                data: Object.values(languageStars),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                hoverOffset: 40,
            },
        ],
    }

    return (
        <div
            style={{
                position: 'relative',
                maxWidth: '40vw',
                backgroundColor: 'white',
            }}
        >
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart
