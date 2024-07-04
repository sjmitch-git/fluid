export interface ButtonGroupProps {
	className?: string
	children: React.ReactNode
	label?: string
	layout?: 'horizontal' | 'vertical'
	rounded?: boolean
	outline?: 'none' | 'thin' | 'thick'
	outlineColor?: 'none' | 'light' | 'dark'
}
