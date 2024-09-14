export interface Option {
	value: string | number
	label: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: string[] | number[] | Option[]
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
	name?: string
	placeholder?: string
	defaultValue?: string | number
	disabled?: boolean
	required?: boolean
	nocaret?: boolean
	className?: string
	dropdownSize?: 'sm' | 'md' | 'lg' | 'xl'
	rounded?: 'none' | 'md' | 'lg' | 'full'
}
