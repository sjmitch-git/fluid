import React from 'react'

import { CardProps } from './types'

const defaultStyles = 'rounded border shadow-lg'

const layouts = {
	col: 'col grid-cols-1',
	row: 'row grid-cols-4',
}

const Card = ({ className = defaultStyles, children, layout = 'col' }: CardProps) => {
	const themeClasses = 'bg-light text-dark dark:bg-dark dark:text-light'
	const layoutClasses = layouts[layout]

	return (
		<div
			className={`card group relative grid ${className} ${themeClasses} ${layoutClasses}`}
			data-testid='card'
		>
			{children}
		</div>
	)
}

export default Card
