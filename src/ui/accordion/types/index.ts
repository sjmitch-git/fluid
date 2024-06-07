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
	data?: DataProps[]
	children?: React.ReactNode
	opened?: string
	layout?: 'default' | 'flush' | 'spaced'
	theme?: 'light' | 'dark' | 'transparent'
	icon?: 'symbol' | 'arrow'
}

export interface AccordionHeadProps {
	icon?: 'symbol' | 'arrow'
	id: string
	open: string
	setopen: (id: string) => void
	title?: string
	name?: string
}

export interface AccordionCardProps {
	theme?: 'light' | 'dark' | 'transparent'
	src?: string
	title: string
	description?: string
	link?: string
}

export interface AccordionSectionProps {
	children: React.ReactNode
}

export interface AccordionItemProps {
	children: React.ReactNode
	layoutClasses: string
	themeClasses: string
	id: string
	title: string
	icon?: 'symbol' | 'arrow'
	open: string
	setOpen: (id: string) => void
}
