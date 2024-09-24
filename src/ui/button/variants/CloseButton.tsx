import Button from '../Button'
import { ButtonProps } from '../types'
import { HiMiniXMark } from 'react-icons/hi2'

const stateClasses = 'hover:scale-100'

const sizes = {
	sm: 'w-4',
	md: 'w-6',
	lg: 'w-8',
	xl: 'w-12',
}

const CloseButton = ({
	size = 'sm',
	className = 'right-5 top-4',
	onClick,
	disabled = false,
	color = 'current',
	background = 'transparent',
	layout = 'square',
	title = 'Close?',
	outline,
}: ButtonProps) => {
	let sizeClasses = sizes[size]

	return (
		<Button
			className={`fixed !p-0 ${className} ${stateClasses} ${sizeClasses}`}
			onClick={onClick}
			background={background}
			color={color}
			layout={layout}
			size={size}
			title={title}
			disabled={disabled}
			outline={outline}
		>
			<HiMiniXMark className={`h-auto w-full`} />
			<span className='sr-only'>Close</span>
		</Button>
	)
}

export default CloseButton
