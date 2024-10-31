'use client'

import React from 'react'
import { Line } from 'react-chartjs-2'
import {
	Chart as ChartJS,
	ChartOptions,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'

import { LineChartProps } from './types'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = ({ data, title, legendPosition, options }: LineChartProps) => {
	const defaultOptions: ChartOptions<'line'> = {
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
	}

	const combinedOptions = { ...defaultOptions, ...options }

	return (
		<div className='min-h-[350px] lg:min-h-[450px]'>
			<Line
				data={data}
				options={combinedOptions}
			/>
		</div>
	)
}

export default LineChart
