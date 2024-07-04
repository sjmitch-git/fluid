export interface LoadingProps {
	className?: string
	caption?: string
	spinner: string
	size?: 'sm' | 'md' | 'lg' | 'xl'
	layout?: 'col' | 'col_reverse' | 'row' | 'row_reverse'
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
}
