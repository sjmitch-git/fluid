export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
	src: string
	poster?: string
	controls?: boolean
	loop?: boolean
	setDuration?: (number: number) => void
	setTime?: (number: number) => void
	play: boolean
	togglePlay: () => void
	onEnded: () => void
	muted: boolean
	preload?: 'auto' | 'metadata' | 'none'
	fallback?: string
	currentTime?: number
	volume?: number
	formats?: string[]
	pictureInPicture?: boolean
}

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
	controls?: boolean
	loop?: boolean
	poster?: string
	preload?: 'auto' | 'metadata' | 'none'
	src: string
	fallback?: string
	aspect?: 'video' | 'square' | 'television' | 'cinematic' | 'portrait'
	className?: string
	formats?: string[]
}

export interface VideoControlProps extends React.HTMLAttributes<HTMLDivElement> {
	duration: number
	time: number
	togglePlay: () => void
	play: boolean
	onScrubChange?: (number: number) => void
	fullscreen: boolean
	onFullscreen?: () => void
	onPIP?: () => void
	muted: boolean
	onMute: () => void
	onVolume: (number: number) => void
}
