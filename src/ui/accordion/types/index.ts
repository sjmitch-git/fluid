interface DataProps {
	id: string
	title?: string
	name: string
	description: string
	body?: string
	src: string
	link: string
}

export interface AccordionProps {
	className?: string
	size?: 'sm' | 'md' | 'lg'
	data: DataProps[]
	opened?: string
	layout?: 'default' | 'flush' | 'spaced'
	theme?: 'light' | 'dark' | 'transparent'
	icon?: 'symbol' | 'arrow'
}
