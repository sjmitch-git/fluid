import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { CardProps } from './types'

import { shadows } from '../@styles'

const layouts = {
	col: 'col flex flex-col',
	col_reverse: 'col flex flex-col-reverse',
	row: 'row grid grid-cols-4',
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
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const shadowClasses = useMemo(() => (shadow ? `${shadows[shadow]}` : ''), [shadow])
	const roundedClasses = useMemo(() => roundeds[rounded], [rounded])
	const outlineClasses = useMemo(
		() => (outline ? 'border border-dark/[.20] dark:border-light/[.20]' : ''),
		[outline]
	)

	return (
		<div
			className={twMerge(
				`card group relative bg-light text-dark dark:bg-dark dark:text-light ${shadowClasses} ${layoutClasses} ${roundedClasses} ${outlineClasses}`,
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
