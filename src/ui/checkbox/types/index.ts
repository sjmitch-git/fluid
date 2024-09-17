export interface CheckboxProps {
	className?: string
	style?: React.CSSProperties
	size?: 'sm' | 'md' | 'lg' | 'xl'
	label: string
	labelIsBold?: boolean
	required?: boolean
	name?: string
	rounded?: 'none' | 'full'
	hint?: React.ReactNode
	disabled?: boolean
}
