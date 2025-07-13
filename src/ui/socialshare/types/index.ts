export interface btnProps {
	btnShape?: 'rounded' | 'square' | 'circle'
	size?: 'md' | 'lg' | 'xl'
}

export interface SocialShareProps extends btnProps {
	className?: string
	style?: React.CSSProperties
	layout?: 'horizontal' | 'vertical'
	text: string
	buttons: string[]
	gap?: 'none' | 'sm' | 'md' | 'lg'
}

export interface XButtonProps extends btnProps {
	text: string
}

export interface WhatsAppButtonProps extends XButtonProps {}
export interface SlackButtonProps extends XButtonProps {}

export interface FacebookButtonProps extends btnProps {}
export interface LinkedInButtonProps extends btnProps {}
