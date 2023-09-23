import { CardHeaderProps } from './types'

const defaultStyles = 'p-0'
const titleStyles = 'font-bold opacity-80 capitalize mb-2'

const CardHeader = ({
	className = defaultStyles,
	title,
	titlestyles = titleStyles,
}: CardHeaderProps) => {
	return (
		<header className={`card-header ${className}`}>
			<h4 className={`card-title ${titlestyles}`}>{title}</h4>
		</header>
	)
}

export default CardHeader
