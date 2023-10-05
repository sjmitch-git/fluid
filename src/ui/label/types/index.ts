export interface LabelProps {
	className?: string
	layout?: 'col' | 'row' | 'inline'
	size?: 'sm' | 'md' | 'lg'
	label: string | React.ReactNode
	hint?: string
	children: React.ReactNode
	type?:
		| 'text'
		| 'password'
		| 'number'
		| 'email'
		| 'tel'
		| 'date'
		| 'checkbox'
		| 'radio'
		| 'file'
		| 'button'
		| 'color'
		| 'range'
		| 'search'
		| 'url'
		| 'datetime-local'
		| 'time'
		| 'month'
		| 'week'
	value?: any
	required?: boolean
	onToggleType?: () => void
}
