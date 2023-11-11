export interface AutocompleteProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	data: any[]
	list: string
	name?: string
	autocomplete?: string
	required?: boolean
	placeholder?: string
	onchange?: React.ChangeEventHandler<HTMLInputElement>
}
