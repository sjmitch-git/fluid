export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	name?: string
	placeholder?: string
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	rows?: number
	maxLength?: number
	disabled?: boolean
	resize?: boolean
	size?: 'sm' | 'md' | 'lg' | 'xl'
	label: string
	layout?: 'col' | 'row'
	required?: boolean
}
