export interface PictogramProps {
	labels: string[]
	tally: number[]
	icon?: React.ReactNode
	caption?: string
	captionSide?: 'top' | 'bottom'
	className?: string
	style?: React.CSSProperties
}
