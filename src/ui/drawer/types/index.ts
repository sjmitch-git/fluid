export interface DrawerProps {
	className?: string
	style?: React.CSSProperties
	children: React.ReactNode
	open: boolean
	backdrop?: boolean
	position?: 'top' | 'bottom'
	onClose: (open: boolean) => void
}
