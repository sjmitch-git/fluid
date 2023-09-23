import { CardProps } from './types'

const defaultStyles = 'rounded border shadow-lg'

const layouts = {
	col: 'col grid-cols-1',
	row: 'row grid-cols-4',
}

const themes = {
	light: 'bg-light text-dark test',
	dark: 'bg-dark text-light',
	primary: 'bg-primary text-light',
	info: 'bg-info text-light',
	warning: 'bg-warning text-light',
	error: 'bg-error text-light',
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
		<div className={`card group relative grid ${className} ${themeClasses} ${layoutClasses}`}>
			{children}
		</div>
	)
}

export default Card
