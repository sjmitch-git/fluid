'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { RadarChartProps } from './types'

const RadarChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444',
	style,
	className,
}: RadarChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...options,
				scales: {
					r: {
						grid: {
							color: gridColor,
						},
					},
				},
			}}
			title={title}
			legendPosition={legendPosition}
			chartType='radar'
			className={className}
			style={style}
		/>
	)
}

export default RadarChart
