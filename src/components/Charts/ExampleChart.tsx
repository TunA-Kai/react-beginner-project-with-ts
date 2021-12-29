import { ChartOptions, ChartData } from 'chart.js'
import { ChartProps, Pie } from 'react-chartjs-2'

interface ExampleChartProps {}

const data: ChartData<'pie', number[], string> = {
    labels: ['HTML', 'CSS', 'JS'],
    datasets: [
        {
            label: 'languages',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 40,
            // offset: 40,
        },
    ],
}

const options: ChartOptions<'pie'> = {
    plugins: {
        title: {
            display: true,
            text: 'Languages',
            color: '#000',
            font: {
                size: 24,
            },
            padding: 40,
        },
        tooltip: {
            callbacks: {
                title: function (context) {
                    // console.log(context)
                    let { label, formattedValue } = context[0]
                    return `${label}: ${formattedValue}%`
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

const ExampleChart: React.FC<ExampleChartProps> = ({}) => {
    return (
        <div style={{ maxHeight: '400px', maxWidth: '400px' }}>
            <Pie data={data} options={options} />
        </div>
    )
}

export default ExampleChart
