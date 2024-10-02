import React, {useMemo} from 'react'

import { twMerge } from 'tailwind-merge'

import { CardProps } from './types'

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

	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const shadowClasses = useMemo(() => shadow ? `${shadows[shadow]} shadow-gray-500/50` : '', [shadow]);
	const roundedClasses = useMemo(() => roundeds[rounded], [rounded])
	const outlineClasses = useMemo(() => outline ? 'border border-neutral' : '', [outline])

	return (
		<div
			className={twMerge(
				`card group relative grid bg-light text-dark dark:bg-dark dark:text-light ${shadowClasses} ${layoutClasses} ${roundedClasses} ${outlineClasses}`,
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
