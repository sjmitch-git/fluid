export interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	data: any[]
	getIcon?: (key: string) => void
	legend?: string
	selected?: string
	icons?: boolean
	disabled?: boolean
	className?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	labelStyles?: string
	name?: string
	hideInput?: boolean
	columns?: 1 | 2 | 3 | 4 | 5 | 6
	size?: 'sm' | 'md' | 'lg' | 'xl'
}
