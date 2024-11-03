'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { LineChartProps } from './types'

const LineChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444',
	style,
	className,
}: LineChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				scales: {
					x: {
						grid: {
							color: gridColor,
						},
					},
					y: {
						grid: {
							color: gridColor,
						},
					},
				},
			}}
			title={title}
			legendPosition={legendPosition}
			chartType='line'
			className={className}
			style={style}
		/>
	)
}

export default LineChart
