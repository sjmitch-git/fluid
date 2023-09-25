export interface AlertProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	status?: 'info' | 'success' | 'warning' | 'error'
	message: string
	layout?: 'default' | 'solid' | 'outline'
	onClick?: (e: any) => void
}
