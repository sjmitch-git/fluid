export interface VideoProps extends React.HTMLAttributes<HTMLVideoElement> {
	src: string
	className?: string
	formats?: any[]
	loop?: boolean
	controls?: boolean
	preload?: 'auto' | 'metadata' | 'none'
	poster?: string
	fallback?: string
	play?: boolean
	onPlay?: () => void
	pause?: boolean
	onPause?: () => void
	onEnd?: () => void
	onDuration?: (number: number) => void
	currentTime?: number
	onTime?: (number: number) => void
	fullscreen?: boolean
	mute?: boolean
	volume?: number
}

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
	src: string
	poster?: string
	className?: string
	formats?: any[]
}
