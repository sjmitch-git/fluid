export interface VideoTracksProps {
	tracks?: string[]
	srcLangs?: string[]
}

export interface MediaProps extends VideoTracksProps {
	src: string
	poster?: string
	loop?: boolean
	preload?: 'auto' | 'metadata' | 'none'
	formats?: ('mp4' | 'webm' | 'ogg')[]
	fallback?: string
	muted?: boolean
	autoplay?: boolean
	aspect?: 'video' | 'square' | 'television' | 'cinema' | 'phone' | 'ultrawide'
}

export interface VideoSpecificProps {
	defaultError: string
	play?: boolean
	togglePlay?: () => void
	playEnded?: () => void
	pictureInPicture?: boolean
	controls?: boolean
}

export interface VideoProps extends MediaProps, VideoSpecificProps {
	setDuration?: (duration: number) => void
	setTime?: (time: number) => void
	currentTime?: number
	volume?: number
	trackIndex?: string
	className?: string
}

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement>, MediaProps {
	className?: string
	defaultError?: string
	controlOptions?: ('sound' | 'fullscreen' | 'pip' | 'captions')[]
	progressBg?: string
	progressColor?: string
}

export interface VideoControlProps extends React.HTMLAttributes<HTMLDivElement>, VideoTracksProps {
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
	onCaption: (index: string) => void
	controlOptions?: ('sound' | 'fullscreen' | 'pip' | 'captions')[]
	progressBg?: string
	progressColor?: string
}
