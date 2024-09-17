export interface CardProps {
	className?: string
	style?: React.CSSProperties
	layout?: 'col' | 'row'
	children: React.ReactNode
}

export interface CardHeaderProps {
	className?: string
	title: string
	titlestyles?: string
	children?: React.ReactNode
}

export interface CardBodyProps {
	className?: string
	children: React.ReactNode
}

export interface CardImageProps {
	className?: string
	title: string
	src: string
	aspect?: 'landscape' | 'portrait' | 'square' | 'video'
}

export interface CardFooterProps {
	className?: string
	link?: string
	linkLabel?: string
	children?: React.ReactNode
}
