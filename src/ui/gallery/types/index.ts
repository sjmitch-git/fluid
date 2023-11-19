export interface DataProps {
	name: string
	src: string
}

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	className?: string
	aspect?: 'landscape' | 'portrait' | 'square' | 'video' | 'circle' | 'phone'
	caption?: boolean
}
