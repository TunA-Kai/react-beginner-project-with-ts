import { ChartOptions } from 'chart.js'

/**
 * @param {'x'|'y'} indexAxis - Column or Bar chart
 * @param {string} xTitle - Title for x Axis
 * @param {string} yTitle - Title for y Axis
 * @param {string} chartTitle - Title for the chart
 * @returns {ChartOptions<'bar'>} object options
 */
export function createChartOptions(
    indexAxis: 'x' | 'y',
    xTitle: string,
    yTitle: string,
    chartTitle: string,
): ChartOptions<'bar'> {
    const options: ChartOptions<'bar'> = {
        indexAxis: indexAxis,
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
                    text: xTitle,
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
                    text: yTitle,
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
                text: chartTitle,
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

    return options
}

export const backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)',
]

export const borderColor = [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)',
]
