export interface LabelProps {
	className?: string
	layout?: 'col' | 'row' | 'inline'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	label: string | React.ReactNode
	value?: any
	required?: boolean
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
}
