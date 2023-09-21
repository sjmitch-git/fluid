import { CardProps } from './types'

const Card = ({ children, theme = 'light', layout = 'col' }: CardProps) => {
	return <div className={`card bg-${theme} ${layout}`}>{children}</div>
}

export default Card
