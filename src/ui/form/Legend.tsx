import { LegendProps } from './types'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-2xl',
}

const alignments = {
	left: 'text-left',
	center: 'text-center',
	right: 'text-right',
}

const Legend = ({
	text,
	isBold = false,
	className = '',
	align = 'center',
	legendSize = 'md',
}: LegendProps) => {
	const sizeClasses = sizes[legendSize]
	const alignment = alignments[align]

	return (
		<legend
			className={`legend ${className} ${alignment} ${
				isBold ? 'font-bold' : 'font-normal'
			} text-${align} ${sizeClasses} text-dark dark:text-light mb-[1em]`}
		>
			{text}
		</legend>
	)
}

export default Legend
