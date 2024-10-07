export interface ProgressProps {
	className?: string
	style?: React.CSSProperties
	id?: string
	value?: number
	max?: number
	totalSize: number
	downloadedSize: number
}
