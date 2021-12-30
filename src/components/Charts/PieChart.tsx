import { ChartOptions, ChartData } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { useGithubContext } from '../../context/context'

const options: ChartOptions<'pie'> = {
    plugins: {
        title: {
            display: true,
            text: 'Most Used Languages',
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
                    return `${formattedValue} projects`
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

interface PieChartProps {}

const PieChart: React.FC<PieChartProps> = ({}) => {
    const { repos } = useGithubContext()
    const tempLanguageUsed: { [key: string]: number } = {}
    repos.forEach(({ language }: { language: string }) => {
        if (!language) return

        language in tempLanguageUsed
            ? tempLanguageUsed[language]++
            : (tempLanguageUsed[language] = 1)
    })
    const languageUsed = Object.fromEntries(
        Object.entries(tempLanguageUsed)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5),
    )
    // console.log(languageUsed)

    const chartData: ChartData<'pie', number[], string> = {
        labels: Object.keys(languageUsed),
        datasets: [
            {
                label: 'languages',
                data: Object.values(languageUsed),
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
            <Pie data={chartData} options={options} />
        </div>
    )
}

export default PieChart
