export interface RatingsProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	icon?: 'star' | 'smiley' | 'thumb' | 'heart' | 'pound' | 'dollar' | 'euro' | 'yen' | 'check'
	rating: number
	range?: number
	spacing?: '0' | '1' | '2'
	shape?: 'square' | 'circle' | 'rounded'
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
		| 'neutral'
	size?: 'sm' | 'md' | 'lg' | 'xl'
}
