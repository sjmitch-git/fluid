import React, { useRef, useEffect, useCallback, useState } from 'react'

import { Alert } from '@/ui'

interface VideoProps {
	src: string
	poster?: string
	title?: string
	controls?: boolean
	loop?: boolean
	setDuration: (number: number) => void
	setTime: (number: number) => void
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

const posterSrc = '/poster.png'

const Video = ({
	src,
	poster = posterSrc,
	controls = true,
	loop = false,
	muted = false,
	setDuration,
	setTime,
	play,
	togglePlay,
	preload = 'none',
	fallback = 'Your browser does not support the video tag.',
	currentTime,
	onEnded,
	volume = 5,
	formats = ['mp4'],
	pictureInPicture = false,
}: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [error, setError] = useState('')

	useEffect(() => {
		const node = videoRef.current
		if (node) play ? node.play() : node.pause()
	}, [play])

	useEffect(() => {
		const node = videoRef.current
		if (node && typeof document !== null && node.duration) {
			if (document.pictureInPictureElement) {
				document.exitPictureInPicture()
			} else if (document.pictureInPictureEnabled) {
				node.requestPictureInPicture()
			}
		}
	}, [pictureInPicture])

	useEffect(() => {
		const node = videoRef.current
		if (node && currentTime && currentTime !== 0) {
			node.currentTime = currentTime
		}
	}, [currentTime])

	useEffect(() => {
		const node = videoRef.current
		if (node) node.volume = volume / 10
	}, [volume])

	const handleLoadedmetadata = () => {
		if (videoRef.current) setDuration(videoRef.current.duration)
	}

	const handleEnd = () => onEnded()

	const handleTime = () => {
		if (videoRef.current) setTime(videoRef.current.currentTime)
	}

	const handleError = () => {
		const node = videoRef.current
		if (node) {
			const error = node?.error?.message || 'Oops! There was an unknown error.'
			setError(error)
		}
	}

	const setVideoRef = useCallback((node: HTMLVideoElement) => {
		if (node) {
			videoRef.current = node
			node.addEventListener('loadedmetadata', handleLoadedmetadata, true)
			node.addEventListener('ended', handleEnd, true)
			node.addEventListener('timeupdate', handleTime, true)
			node.addEventListener('error', handleError, true)
		}
		return () => {
			if (node) {
				node.removeEventListener('loadedmetadata', handleLoadedmetadata, true)
				node.removeEventListener('ended', handleEnd, true)
				node.removeEventListener('timeupdate', handleTime, true)
				node.removeEventListener('error', handleError, true)
			}
		}
	}, [])

	return (
		<>
			<video
				poster={poster}
				width='100%'
				height='auto'
				controls={controls}
				loop={loop}
				ref={setVideoRef}
				onClick={togglePlay}
				className={`${!error ? 'cursor-pointer' : ''}`}
				muted={muted}
				preload={preload}
			>
				{formats.map((format, index) => (
					<source
						src={`${src.slice(0, src.lastIndexOf('.'))}.${format}`}
						key={index}
						type={`video/${format}`}
					/>
				))}
				<p>{fallback}</p>
			</video>
			{error && (
				<Alert
					title='Error'
					message={error}
					status='error'
					className='!absolute top-4 left-2 right-2'
				/>
			)}
		</>
	)
}

export default Video
