import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ChartOptions,
} from 'chart.js'

import { BarChartProps } from './types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = ({
	data,
	title,
	legendPosition = 'top',
	xAxisLabel,
	yAxisLabel,
	layout = 'vertical',
	options,
}: BarChartProps) => {
	const defaultOptions: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: legendPosition,
			},
			title: {
				display: !!title,
				text: title,
			},
		},
		indexAxis: layout === 'vertical' ? 'x' : 'y',
		scales: {
			y: {
				beginAtZero: true,
				title: {
					display: !yAxisLabel,
					text: yAxisLabel,
				},
			},
			x: {
				title: {
					display: !!xAxisLabel,
					text: xAxisLabel,
				},
			},
		},
	}

	const combinedOptions = { ...defaultOptions, ...options }

	return (
		<div className='min-h-[350px] lg:min-h-[450px]'>
			<Bar
				data={data}
				options={combinedOptions}
			/>
		</div>
	)
}

export default BarChart
