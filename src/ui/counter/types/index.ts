export interface CounterProps extends React.HTMLAttributes<HTMLLabelElement> {
	name?: string
	id?: string
	min: number
	max: number
	value: number
	step?: number
	className?: string
	label: string
	layout?: 'col' | 'row'
	onCountChange: (count: number) => void
	inputStyles?: string
	btnShape?: 'square' | 'circle' | 'rounded'
	btnBackground?: 'dark' | 'light' | 'transparent'
	btnColor?: 'dark' | 'light' | 'current'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	spacing?: '0' | '1' | '2'
	title?: string
	hint?: boolean
}
