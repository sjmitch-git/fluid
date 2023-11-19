interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	children: React.ReactNode
	className?: string
	theme?: string
	caption?: boolean
	autoplay?: boolean
	gallery?: boolean
	rtl?: boolean
	size?: 'sm' | 'md' | 'lg'
}
