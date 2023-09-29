import React from 'react'

import { CardProps } from './types'

const defaultStyles = 'rounded border shadow-lg'

const layouts = {
	col: 'col grid-cols-1',
	row: 'row grid-cols-4',
}

const themes = {
	light: 'bg-light text-dark test',
	dark: 'bg-dark text-light',
	transparent: 'bg-inherit text-inherit',
}

const Card = ({
	className = defaultStyles,
	children,
	theme = 'light',
	layout = 'col',
}: CardProps) => {
	let themeClasses = themes[theme]
	let layoutClasses = layouts[layout]
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
