export interface TwitterEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string
	style?: React.CSSProperties
	handle: string
	height?: number
	header?: boolean
	borders?: boolean
	transparent?: boolean
	scrollbars?: boolean
	theme?: 'light' | 'dark'
	status?: string
	lang?: string
}
