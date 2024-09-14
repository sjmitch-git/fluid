export interface AlertProps {
	className?: string
	style?: React.CSSProperties
	size?: 'sm' | 'md' | 'lg'
	title?: string
	status?: 'info' | 'success' | 'warning' | 'error'
	message: string
	layout?: 'default' | 'solid' | 'outline'
	onClick?: (e: any) => void
	dismissable?: boolean
}
