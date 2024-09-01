'use client'

import React, { useRef, useEffect, useCallback } from 'react'

import { VideoProps } from './types'

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
	playEnded,
	volume = 5,
	formats = ['mp4'],
	pictureInPicture = false,
	setLoading,
	setError,
	width = '100%',
	height = 'auto',
	defaultError,
}: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null)

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
		if (node && currentTime) {
			node.currentTime = currentTime
		}
	}, [currentTime])

	useEffect(() => {
		const node = videoRef.current
		if (node) node.volume = volume / 10
	}, [volume])

	const handleLoadedmetadata = () => {
		if (setLoading) setLoading(true)
		if (videoRef.current && setDuration) setDuration(videoRef.current.duration)
	}

	const handleLoadeddata = () => {
		if (videoRef.current && setLoading) setLoading(false)
	}

	const handleEnd = () => {
		if (playEnded) playEnded()
	}

	const handleTime = () => {
		if (videoRef.current && setTime) setTime(videoRef.current.currentTime)
	}

	const handleError = () => {
		const node = videoRef.current
		if (node && setError) {
			const error = node?.error?.message || defaultError
			setError(error)
		}
	}

	const setVideoRef = useCallback((node: HTMLVideoElement) => {
		if (node) {
			videoRef.current = node
			node.addEventListener('loadedmetadata', handleLoadedmetadata, true)
			node.addEventListener('loadeddata', handleLoadeddata, true)
			node.addEventListener('ended', handleEnd, true)
			node.addEventListener('timeupdate', handleTime, true)
			node.addEventListener('error', handleError, true)
		}
		return () => {
			if (node) {
				node.removeEventListener('loadedmetadata', handleLoadedmetadata, true)
				node.removeEventListener('loadeddata', handleLoadeddata, true)
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
				width={width}
				height={height}
				controls={controls}
				loop={loop}
				ref={setVideoRef}
				onClick={togglePlay}
				className={`video bg-black cursor-pointer`}
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
		</>
	)
}

export default Video
