import React from 'react'

import { BadgeProps } from './types'

const defaultStyles = 'badge group inline-block leading-none p-[.1em] min-w-[1rem]'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	inherit: 'text-inherit',
}

const layouts = {
	square: 'aspect-square',
	circle: 'rounded-full aspect-square',
	rounded: 'rounded-md px-[.15em]',
	pill: 'rounded-full px-[.5em]',
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
}

const positions = {
	inline: 'relative -top-3',
	right: 'absolute end-1 top-1',
	left: 'absolute start-1 top-1',
}

const Badge = ({
	className = '',
	layout = 'circle',
	background = 'info',
	color = 'light',
	position = 'inline',
	children,
}: BadgeProps) => {
	let layoutClasses = layouts[layout]
	let backgroundClasses = backgrounds[background]
	let colorClasses = colors[color]
	let positionClasses = positions[position]
	return (
		<small
			className={`${defaultStyles} ${className} ${layoutClasses} ${backgroundClasses} ${colorClasses} ${positionClasses}`}
			data-testid='badge'
		>
			<span className='flex gap-2'>{children}</span>
		</small>
	)
}

export default Badge
