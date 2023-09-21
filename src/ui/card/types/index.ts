export interface CardProps {
	theme?: 'light' | 'dark' | 'primary' | 'info' | 'warning' | 'error'
	layout?: 'col' | 'row'
	children: React.ReactNode
}

export interface CardHeaderProps {
	title: string
	children?: React.ReactNode
}

export interface CardBodyProps {
	children: React.ReactNode
}

export interface CardImageProps {
	title: string
	src: string
	aspect?: 'landscape' | 'portrait' | 'square' | 'video'
}

export interface CardFooterProps {
	link?: string
	linkLabel?: string
	children?: React.ReactNode
}
