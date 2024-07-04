export interface BadgeProps {
	className?: string
	children: React.ReactNode
	layout?: 'square' | 'circle' | 'rounded' | 'pill'
	position?: 'inline' | 'left' | 'right'
	background?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'neutral'
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
		| 'accent'
	size?: 'sm' | 'md' | 'lg' | 'xl'
}
