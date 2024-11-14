'use client'

import React from 'react'
import ChartWrap from './ChartWrap'
import { MixedChartProps } from './types'

const MixedChart = ({
	data,
	options,
	title,
	legendPosition,
	gridColor = '#444444',
	style,
	className,
}: MixedChartProps) => {
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
			chartType='bar'
			className={className}
			style={style}
		/>
	)
}

export default MixedChart
