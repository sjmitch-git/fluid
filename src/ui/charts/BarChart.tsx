'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { BarChartProps } from './types'

const BarChart = ({
	data,
	options,
	title,
	legendPosition,
	style,
	className,
	layout,
	gridColor = '#444444',
}: BarChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				indexAxis: layout === 'horizontal' ? 'y' : 'x',
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
			chartType='bar'
			className={className}
			style={style}
		/>
	)
}

export default BarChart
