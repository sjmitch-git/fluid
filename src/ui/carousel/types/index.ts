interface DataProps {
	name: string
	src: string
	description: string
	link: string
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
	data: DataProps[]
	children?: React.ReactNode
	className?: string
	theme?: 'none' | 'light' | 'dark'
	caption?: boolean
	autoplay?: boolean
	gallery?: boolean
	rtl?: boolean
	aspect?: 'landscape' | 'portrait' | 'square' | 'video' | 'circle' | 'phone'
	buttonLayout?: 'rounded' | 'square' | 'circle'
	buttonIcon?: 'arrow' | 'chevron'
	buttonSize?: 'md' | 'lg' | 'xl'
	buttonBackground?: 'dark' | 'light' | 'transparent'
	buttonColor?: 'dark' | 'light'
	buttonOutline?: boolean
}
