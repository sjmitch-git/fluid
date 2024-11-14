import React, { useMemo } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { twMerge } from 'tailwind-merge'
import { Bubble, Line, Bar, Pie, Radar, PolarArea, Scatter, Doughnut } from 'react-chartjs-2'
import { ChartDataMap, ChartOptionsMap } from './types'

const merge = require('deepmerge')

ChartJS.register(...registerables)

type ChartTypes = keyof ChartDataMap

interface ChartWrapProps<T extends ChartTypes> {
	title?: string
	legendPosition?: string
	data: ChartDataMap[T]
	options?: ChartOptionsMap[T]
	chartType: T
	className?: string
	style?: React.CSSProperties
}

const ChartWrap = <T extends ChartTypes>({
	data,
	options,
	title,
	legendPosition,
	chartType,
	className,
	style,
}: ChartWrapProps<T>) => {
	const defaultOptions = {
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

	const chartComponents: Record<ChartTypes, React.ElementType> = {
		bubble: Bubble,
		line: Line,
		bar: Bar,
		pie: Pie,
		doughnut: Doughnut,
		radar: Radar,
		polarArea: PolarArea,
		scatter: Scatter,
		mixed: Bar,
	}

	const ChartComponent = chartComponents[chartType] as React.ElementType

	const combinedOptions = useMemo(() => {
		if (options) return merge(defaultOptions, options)
		return defaultOptions
	}, [defaultOptions, options])

	return (
		<div
			className={twMerge(`chart-wrap min-h-[350px] lg:min-h-[450px]`, className)}
			style={style}
		>
			<ChartComponent
				data={data}
				options={combinedOptions}
				title={title}
				legendPosition={legendPosition}
			/>
		</div>
	)
}

export default ChartWrap
