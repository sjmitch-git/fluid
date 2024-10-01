import React from 'react'

import { twMerge } from 'tailwind-merge'

import { BadgeProps } from './types'

const layouts = {
	square: 'aspect-square p-[.25em]',
	circle: 'rounded-full aspect-square p-[.25em]',
	rounded: 'rounded-md p-[.25em]',
	pill: 'rounded-full p-[.5em]',
}

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-2xl',
}

const backgrounds = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	danger: 'bg-danger',
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	dark: 'bg-dark',
	light: 'bg-white',
	accent: 'bg-accent',
	neutral: 'bg-neutral',
	transparent: 'bg-transparent',
}

const colors = {
	info: '!text-info',
	success: 'text-success',
	warning: 'text-warning',
	danger: '!text-danger',
	primary: 'text-primary',
	secondary: 'text-secondary',
	dark: 'text-dark',
	light: 'text-light',
	accent: 'text-accent',
	current: 'text-current',
	neutral: 'text-neutral',
}

const positions = {
	inline: 'relative -top-3',
	right: 'absolute end-1 top-1',
	left: 'absolute start-0 top-0',
}

const Badge = ({
	className = '',
	style,
	layout = 'circle',
	background = 'info',
	color = 'light',
	position = 'inline',
	children,
	size = 'md',
}: BadgeProps) => {
	const layoutClasses = layouts[layout]
	const backgroundClasses = backgrounds[background]
	const colorClasses = colors[color]
	const positionClasses = positions[position]
	const sizeClasses = sizes[size]

	return (
		<small
			className={twMerge(
				`badge group inline-block leading-none min-w-[1em] ${sizeClasses} ${layoutClasses} ${backgroundClasses} ${colorClasses} ${positionClasses}`,
				className
			)}
			style={style}
			data-testid='badge'
		>
			<span className='flex gap-2'>{children}</span>
		</small>
	)
}

export default Badge
