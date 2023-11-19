export interface InputProps {
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
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
		| 'color'
		| 'range'
		| 'search'
		| 'url'
		| 'datetime-local'
		| 'time'
		| 'month'
		| 'week'
	autocomplete?: string
	name?: string
	label?: React.ReactNode
	title?: string
	placeholder?: string
	list?: string
	pattern?: string
	className?: string
	labelStyles?: string
	hidden?: boolean
	required?: boolean
	readonly?: boolean
	tabindex?: number
	min?: number | string
	max?: number | string
	step?: string
	accept?:
		| 'audio/*'
		| 'image/*'
		| 'video/*'
		| '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	multiple?: boolean
	value?: any
	checked?: boolean
	onchange?: React.ChangeEventHandler<HTMLInputElement>
	oninput?: React.ChangeEventHandler<HTMLInputElement>
}
