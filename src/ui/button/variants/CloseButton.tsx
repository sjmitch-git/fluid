import Button from '../Button'
import { ButtonProps } from '../types'

const sizes = {
	xs: 'w-4',
	sm: 'w-4',
	md: 'w-6',
	lg: 'w-8',
	xl: 'w-12',
}

const CloseButton = ({
	size = 'sm',
	className = 'shadow-none hover:shadow-none absolute right-0 top-0 !p-0',
	onClick,
	disabled = false,
	color = 'current',
	background = 'transparent',
	layout = 'square',
	title = 'Close?',
}: ButtonProps) => {
	let sizeClasses = sizes[size]

	return (
		<Button
			className={`${className} ${sizeClasses}`}
			onClick={onClick}
			background={background}
			color={color}
			layout={layout}
			size={size}
			title={title}
			disabled={disabled}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='currentColor'
				viewBox='0 0 24 24'
				className='w-full h-auto'
			>
				<path
					fill-rule='evenodd'
					d='M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z'
					clip-rule='evenodd'
				/>
			</svg>
			<span className='sr-only'>Close</span>
		</Button>
	)
}

export default CloseButton
