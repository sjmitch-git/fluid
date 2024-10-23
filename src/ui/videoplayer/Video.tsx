'use client'

import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react'
import VideoTracks from './VideoTracks'
import { twMerge } from 'tailwind-merge'
import { Loading, Alert } from '..'
import { aspects } from '../@utils'

import { VideoProps } from './types'

const posterSrc = '/poster.png'

const loadingClasses =
	'[&&::-webkit-media-controls-panel]:!hidden [&&::-webkit-media-controls-enclosure]:!hidden [&&::-webkit-media-controls]:!hidden'

const Video = ({
	src,
	poster = posterSrc,
	tracks,
	srcLangs,
	trackIndex,
	controls = true,
	aspect = 'video',
	loop = false,
	muted,
	autoplay = false,
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
	defaultError,
	className = '',
}: VideoProps) => {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const aspectRatioClasses = useMemo(() => aspects[aspect], [aspect])

	useEffect(() => {
		const node = videoRef.current
		if (node) play ? node.play() : node.pause()
	}, [play])

	useEffect(() => {
		const node = videoRef.current
		if (node && trackIndex) {
			const textTracks = node.textTracks
			for (let i = 0; i < textTracks.length; i++) {
				if (i === Number(trackIndex)) textTracks[i].mode = 'showing'
				else textTracks[i].mode = 'disabled'
			}
		}
	}, [trackIndex])

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

	const handleLoadedmetadata = useCallback(() => {
		if (videoRef.current && setDuration) setDuration(videoRef.current.duration)
	}, [setDuration])

	const handleTogglePlay = () => {
		if (togglePlay) togglePlay()
	}

	const handleEnd = useCallback(() => {
		if (playEnded) playEnded()
	}, [playEnded])

	const handleTime = useCallback(() => {
		if (videoRef.current && setTime) setTime(videoRef.current.currentTime)
	}, [setTime])

	const handleError = useCallback(() => {
		const node = videoRef.current
		if (node) {
			const error = node.error?.message || defaultError
			setError(error)
			setLoading(false)
		}
	}, [setError, defaultError])

	const handleWaiting = useCallback(() => {
		setLoading(true)
	}, [setLoading])

	const handleCanPlay = useCallback(() => {
		setLoading(false)
	}, [setLoading])

	const setVideoRef = useCallback(
		(node: HTMLVideoElement) => {
			if (node) {
				videoRef.current = node
				node.addEventListener('waiting', handleWaiting)
				node.addEventListener('canplay', handleCanPlay)
				node.addEventListener('loadedmetadata', handleLoadedmetadata, true)
				node.addEventListener('ended', handleEnd, true)
				node.addEventListener('timeupdate', handleTime, true)
				node.addEventListener('error', handleError, true)
			}
			return () => {
				if (node) {
					node.removeEventListener('waiting', handleWaiting)
					node.removeEventListener('canplay', handleCanPlay)
					node.removeEventListener('loadedmetadata', handleLoadedmetadata, true)
					node.removeEventListener('ended', handleEnd, true)
					node.removeEventListener('timeupdate', handleTime, true)
					node.removeEventListener('error', handleError, true)
				}
			}
		},
		[handleEnd, handleError, handleLoadedmetadata, handleTime, handleWaiting, handleCanPlay]
	)

	return (
		<figure
			className={twMerge(
				`video-figure group overflow-hidden flex items-center relative ${aspectRatioClasses}`,
				className
			)}
		>
			<video
				poster={poster}
				width='100%'
				height='auto'
				controls={controls}
				loop={loop}
				ref={setVideoRef}
				className={`video bg-black' ${loading ? loadingClasses : ''}`}
				muted={muted}
				autoPlay={autoplay}
				preload={preload}
				onClick={handleTogglePlay}
			>
				{formats.map((format, index) => (
					<source
						src={`${src.slice(0, src.lastIndexOf('.'))}.${format}`}
						key={index}
						type={`video/${format}`}
					/>
				))}
				{tracks ? (
					<VideoTracks
						tracks={tracks}
						srcLangs={srcLangs}
					/>
				) : null}
				<p>{fallback}</p>
			</video>
			{error && (
				<Alert
					title='Error'
					message={error}
					status='error'
					layout='solid'
					className='!absolute inset-0'
				/>
			)}
			{loading && (
				<Loading
					className='absolute w-full'
					size='lg'
				/>
			)}
		</figure>
	)
}

export default Video
