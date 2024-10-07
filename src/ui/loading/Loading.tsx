import React, { Suspense, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { colors } from '../@utils/themeColors'

const Bars = React.lazy(() => import('./spinners/Bars'))
const Clock = React.lazy(() => import('./spinners/Clock'))
const Dots = React.lazy(() => import('./spinners/Dots'))
const Pulse = React.lazy(() => import('./spinners/Pulse'))
const Spindots = React.lazy(() => import('./spinners/Spindots'))
const Spinner = React.lazy(() => import('./spinners/Spinner'))
const Wifi = React.lazy(() => import('./spinners/Wifi'))

const sizeToWidth = {
	sm: 20,
	md: 40,
	lg: 60,
	xl: 80,
}

const layouts = {
	col: 'flex-col',
	col_reverse: 'flex-col-reverse',
	row: 'flex-row items-center',
	row_reverse: 'flex-row-reverse items-center',
}

const getSpinnerComponent = (spinner: string) => {
	switch (spinner) {
		case 'bars':
			return Bars
		case 'clock':
			return Clock
		case 'dots':
			return Dots
		case 'pulse':
			return Pulse
		case 'spindots':
			return Spindots
		case 'wifi':
			return Wifi
		case 'spinner':
		default:
			return Spinner
	}
}

import { LoadingProps } from './types'

const Loading = ({
	className = '',
	caption = '',
	spinner = 'spinner',
	size = 'md',
	color = 'current',
	layout = 'col',
}: LoadingProps) => {
	const SpinnerIcon = useMemo(() => getSpinnerComponent(spinner), [spinner])
	const width = useMemo(() => sizeToWidth[size], [size])
	const colorClasses = useMemo(() => colors[color], [color])
	const layoutClasses = useMemo(() => layouts[layout], [layout])

	return (
		<div
			className={twMerge(
				`loading flex justify-center items-center text-dark dark:text-light`,
				className
			)}
		>
			<figure className={`figure flex items-center gap-4 ${colorClasses} ${layoutClasses}`}>
				<Suspense fallback={<div className='text-center'>...</div>}>
					<SpinnerIcon width={width} />
				</Suspense>

				{caption && (
					<figcaption className={`figcaption text-center ${colorClasses} text-${size}`}>
						{caption}
					</figcaption>
				)}
			</figure>
		</div>
	)
}

export default Loading
