export interface ButtonProps {
	className?: string
	style?: React.CSSProperties
	children?: React.ReactNode
	size?: 'sm' | 'md' | 'lg' | 'xl'
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
	outlineColor?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
	id?: string
	title?: string
	onClick?: (e: any) => void
	onBlur?: (e: any) => void
	type?: 'submit' | 'reset' | 'button'
	disabled?: boolean
	tabindex?: number
	role?: string
	textcase?: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
	isBold?: boolean
}
