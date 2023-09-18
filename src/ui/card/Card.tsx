import { CardProps } from './types'

const Card = ({ children, theme = 'light', layout = 'col' }: CardProps) => {
	return <div className={`card bg-${theme} flex-${layout}`}>{children}</div>
}

export default Card
