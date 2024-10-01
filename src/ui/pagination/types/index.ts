export interface PaginationProps {
	size?: 'md' | 'lg' | 'xl'
	page: string
	range: number
	results: number
	feedback?: boolean
	feedbackLabel?: string
	vertical?: boolean
	icons?: boolean
	minimal?: boolean
	layout?: 'horizontal' | 'vertical'
	rounded?: boolean
	outline?: 'none' | 'thin' | 'thick'
	outlineColor?: 'light' | 'dark' | 'grey'
	onChange: (e: any) => void
	className?: string
	style?: React.CSSProperties
	btnBackground?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'transparent'
	btnColor?:
		| 'dark'
		| 'light'
		| 'info'
		| 'success'
		| 'warning'
		| 'danger'
		| 'primary'
		| 'secondary'
		| 'current'
}
