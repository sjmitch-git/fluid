export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
	name?: string
	label?: string
	labelIsBold?: boolean
	labelSize?: 'base' | 'lg' | 'xl'
	className?: string
	style?: React.CSSProperties
	switchColor?: 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary' | 'current'
	thin?: boolean
	required?: boolean
	checked?: boolean
	defaultChecked?: boolean
	shape?: 'circle' | 'square'
	disabled?: boolean
	showHint?: boolean
	hint?: React.ReactNode
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
