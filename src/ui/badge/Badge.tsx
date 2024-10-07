import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { BadgeProps } from './types'

import { backgrounds, colors } from '../@utils/themeColors'

const layouts = {
	square: 'aspect-square p-[.15em]',
	circle: 'rounded-full aspect-square p-[.15em]',
	rounded: 'rounded-md px-[.25em] py-[.15em]',
	pill: 'rounded-full p-[.25em]',
}

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	inherit: 'text-[60%]',
}

const positions = {
	inline: 'relative -top-3',
	right: 'absolute end-1 top-1',
	left: 'absolute -start-1 -top-2',
}

const Badge = ({
	className = '',
	style,
	layout = 'circle',
	background = 'info',
	color = 'light',
	position = 'inline',
	children,
	size = 'inherit',
}: BadgeProps) => {
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const backgroundClasses = useMemo(() => backgrounds[background], [background])
	const colorClasses = useMemo(() => colors[color], [color])
	const positionClasses = useMemo(() => positions[position], [position])
	const sizeClasses = useMemo(() => sizes[size], [size])

	return (
		<small
			className={twMerge(
				`badge group inline-block leading-none min-w-[1em] ${sizeClasses} ${layoutClasses} ${backgroundClasses} ${colorClasses} ${positionClasses}`,
				className
			)}
			style={style}
			data-testid='badge'
		>
			<span className='flex items-center gap-1'>{children}</span>
		</small>
	)
}

export default Badge
