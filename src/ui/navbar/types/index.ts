type colors = 'dark' | 'light' | 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary'

type ButtonColor = colors | 'current'
type ButtonBackground = colors | 'transparent'
type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonLayout = 'rounded' | 'square' | 'circle'

interface BaseProps {
	className?: string
	style?: React.CSSProperties
}

export interface NavBarProps extends BaseProps {
	brand?: string
	brandSrc?: string
	brandStyles?: string
	links: NavLink[]
	btnBackground?: ButtonBackground
	btnColor?: ButtonColor
	btnLayout?: ButtonLayout
	btnSize?: ButtonSize
	children?: React.ReactNode
	onLinkClick?: (name: string) => void
}

export interface NavLinkProps extends BaseProps {
	links: NavLink[]
	btnBackground?: ButtonBackground
	btnColor?: ButtonColor
	btnLayout?: ButtonLayout
	btnSize?: ButtonSize
	onLinkClick?: (name: string) => void
}

export interface NavBrandProps extends BaseProps {
	brand?: string
	src?: string
}

export interface NavLink {
	name: string
	href: string
}
