'use client'

import React from 'react'

import ChartWrap from './ChartWrap'
import { DoughnutChartProps } from './types'

const DoughnutChart = ({
	data,
	options,
	title,
	legendPosition,
	border = false,
	style,
	className,
}: DoughnutChartProps) => {
	return (
		<ChartWrap
			data={data}
			options={{
				...(options as any),
				borderWidth: border ? 1 : 0,
			}}
			title={title}
			legendPosition={legendPosition}
			chartType='doughnut'
			className={className}
			style={style}
		/>
	)
}

export default DoughnutChart
