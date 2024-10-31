import { ChartData, ChartOptions } from 'chart.js'

interface ChartComponentProps {
	title?: string
	legendPosition?: 'top' | 'bottom' | 'left' | 'right'
}

export interface LineChartProps extends ChartComponentProps {
	data: ChartData<'line', number[], string>
	options?: ChartOptions<'line'>
}

export interface PieChartProps extends ChartComponentProps {
	data: ChartData<'pie', number[], string>
	options?: ChartOptions<'pie'>
	donut?: boolean
}

export interface BarChartProps extends ChartComponentProps {
	data: ChartData<'bar', number[], string>
	options?: ChartOptions<'bar'>
	xAxisLabel?: string
	yAxisLabel?: string
	layout?: 'vertical' | 'horizontal'
}

export interface RadarChartProps extends ChartComponentProps {
	data: ChartData<'radar', number[], string>
	options?: ChartOptions<'radar'>
}

export interface DoughnutChartProps extends ChartComponentProps {
	data: ChartData<'doughnut', number[], string>
	options?: ChartOptions<'doughnut'>
}

export interface PolarAreaChartProps extends ChartComponentProps {
	data: ChartData<'polarArea', number[], string>
	options?: ChartOptions<'polarArea'>
}

export interface BubbleChartProps extends ChartComponentProps {
	data: ChartData<'bubble', { x: number; y: number; r: number }[], string>
	options?: ChartOptions<'bubble'>
}

export interface ScatterChartProps extends ChartComponentProps {
	data: ChartData<'scatter', { x: number; y: number }[], string>
	options?: ChartOptions<'scatter'>
}
