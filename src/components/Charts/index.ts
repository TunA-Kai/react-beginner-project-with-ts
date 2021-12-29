import { Chart, registerables } from 'chart.js'
import ExampleChart from './ExampleChart'
import Column from './Column'
import Bar from './BarChart'
import Pie from './PieChart'
import Doughnut from './DoughnutChart'

export { ExampleChart, Pie, Column, Bar, Doughnut }
Chart.register(...registerables)
