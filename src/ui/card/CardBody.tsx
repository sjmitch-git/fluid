import { CardBodyProps } from './types'

const defaultStyles =
	'relative flex flex-col p-2 group-[.row]:col-span-4 group-[.row]:peer-[.card-image]:col-span-3'

const CardBody = ({ className = defaultStyles, children }: CardBodyProps) => {
	return <div className={`card-body ${className}`}>{children}</div>
}

export default CardBody
