export interface MediaProps {
	src: string
	poster?: string
	controls?: boolean
	loop?: boolean
	preload?: 'auto' | 'metadata' | 'none'
	formats?: string[]
	fallback?: string
}

export interface VideoSpecificProps {
	muted: boolean
	defaultError: string
	play?: boolean
	togglePlay?: () => void
	playEnded?: () => void
	pictureInPicture?: boolean
}

export interface VideoProps
	extends React.HTMLAttributes<HTMLVideoElement>,
		MediaProps,
		VideoSpecificProps {
	setDuration?: (duration: number) => void
	setTime?: (time: number) => void
	setLoading?: (loading: boolean) => void
	setError?: (error: string) => void
	currentTime?: number
	volume?: number
}

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement>, MediaProps {
	aspect?: 'video' | 'square' | 'television' | 'cinema' | 'phone' | 'ultrawide'
	className?: string
	defaultError?: string
}

export interface VideoControlProps extends React.HTMLAttributes<HTMLDivElement> {
	duration: number
	time: number
	togglePlay: () => void
	play: boolean
	onScrubChange?: (time: number) => void
	fullscreen: boolean
	onFullscreen?: () => void
	onPIP?: () => void
	muted: boolean
	onMute: () => void
	onVolume: (volume: number) => void
}
