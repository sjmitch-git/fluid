export interface AutocompleteProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	data: any[]
	list: string
	name?: string
	required?: boolean
	placeholder?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}
