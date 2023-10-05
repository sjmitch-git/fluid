export interface ButtonProps {
	className?: string
	children?: React.ReactNode
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	background?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'transparent'
	color?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
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
