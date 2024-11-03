'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { BubbleChartProps } from './types'

const BubbleChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444',
	style,
	className,
}: BubbleChartProps) => {
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
			chartType='bubble'
			className={className}
			style={style}
		/>
	)
}

export default BubbleChart
