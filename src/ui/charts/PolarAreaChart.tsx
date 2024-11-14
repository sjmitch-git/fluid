'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { PolarAreaChartProps } from './types'

const PolarAreaChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444444',
	style,
	className,
}: PolarAreaChartProps) => {
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
			chartType='polarArea'
			className={className}
			style={style}
		/>
	)
}

export default PolarAreaChart
