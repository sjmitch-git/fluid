'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { PieChartProps } from './types'

const PieChart = ({
	data,
	options,
	title,
	legendPosition,
	border = false,
	style,
	className,
}: PieChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...(options as any),
				borderWidth: border ? 2 : 0,
			}}
			title={title}
			legendPosition={legendPosition}
			chartType='pie'
			className={className}
			style={style}
		/>
	)
}

export default PieChart
