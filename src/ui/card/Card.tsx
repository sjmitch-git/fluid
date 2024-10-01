import React from 'react'

import { twMerge } from 'tailwind-merge'

import { CardProps } from './types'

const shadowColors = 'shadow-gray-500/50'

const shadows = {
	none: 'shadow-none',
	sm: 'shadow-sm',
	md: 'shadow-md',
	lg: 'shadow-lg',
	xl: 'shadow-xl',
}

const layouts = {
	col: 'col grid-cols-1',
	row: 'row grid-cols-4',
}

const roundeds = {
	none: '',
	sm: 'rounded-sm overflow-hidden',
	md: 'rounded-md overflow-hidden',
	lg: 'rounded-lg overflow-hidden',
	xl: 'rounded-xl overflow-hidden',
}

const Card = ({
	className = '',
	style,
	shadow = 'none',
	children,
	layout = 'col',
	rounded = 'none',
	outline = true,
}: CardProps) => {
	const themeClasses = 'bg-light text-dark dark:bg-dark dark:text-light'
	const layoutClasses = layouts[layout]
	const shadowClasses = `${shadows[shadow]} ${shadowColors}`
	const roundedClasses = roundeds[rounded]

	return (
		<div
			className={twMerge(
				`card group relative grid ${themeClasses} ${shadowClasses} ${layoutClasses} ${roundedClasses} ${
					outline ? 'border border-neutral' : ''
				}`,
				className
			)}
			style={style}
			data-testid='card'
		>
			{children}
		</div>
	)
}

export default Card
