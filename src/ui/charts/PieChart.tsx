import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	ChartOptions,
	Title,
	Tooltip,
	Legend,
	ArcElement,
	PieController,
} from 'chart.js'

import { PieChartProps } from './types'

ChartJS.register(PieController, ArcElement, Title, Tooltip, Legend)

const PieChart = ({ data, title, legendPosition, options, donut = false }: PieChartProps) => {
	const defaultOptions: ChartOptions<'pie'> = {
		responsive: true,
		maintainAspectRatio: false,
		cutout: donut ? '50%' : '0%',
		plugins: {
			legend: {
				position: legendPosition,
			},
			title: {
				display: !!title,
				text: title,
			},
		},
	}

	const combinedOptions = { ...defaultOptions, ...options }

	return (
		<div className='min-h-[350px] lg:min-h-[450px]'>
			<Pie
				data={data}
				options={combinedOptions}
			/>
		</div>
	)
}

export default PieChart
