export interface CardProps {
	theme?: 'light' | 'dark'
	layout?: 'col' | 'row'
	children: React.ReactNode
}

export interface CardHeaderProps {
	title: string
}

export interface CardBodyProps {
	children: React.ReactNode
}

export interface CardImageProps {
	title: string
	src: string
}

export interface CardFooterProps {
	link?: string
	linkLabel?: string
	children: React.ReactNode
}
