export interface DataProps {
	name: string
	src: string
}

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	className?: string
	style?: React.CSSProperties
	aspect?: string
	caption?: boolean
}
