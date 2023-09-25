export interface ButtonProps {
	className?: string
	children: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	theme?:
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'transparent'
		| 'dark'
		| 'light'
	layout?: 'default' | 'rounded' | 'pill' | 'square' | 'circle'
	outline?: boolean
	id?: string
	title?: string
	onClick?: (e: any) => void
	onBlur?: (e: any) => void
	type?: 'submit' | 'reset' | 'button'
	disabled?: boolean
	tabindex?: number
	role?: string
}

export interface ButtonBodyProps {
	className?: string
	children: React.ReactNode
}
