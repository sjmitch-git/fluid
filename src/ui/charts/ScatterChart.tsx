'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { ScatterChartProps } from './types'

const ScatterChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444',
	style,
	className,
}: ScatterChartProps) => {
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
			chartType='scatter'
			className={className}
			style={style}
		/>
	)
}

export default ScatterChart
