import React, { useState, useEffect } from 'react'
import Video from './Video'
import VideoControls from './VideoControls'

import { VideoPlayerProps } from './types'

const aspectRatios = {
	video: 'aspect-video',
	square: 'aspect-square',
	television: 'aspect-[4/3]',
	cinematic: 'aspect-[21/9]',
	portrait: 'aspect-[9/16]',
}

const VideoPlayer = ({
	src,
	poster,
	controls,
	loop,
	className = '',
	aspect = 'video',
	preload,
	fallback,
	formats = ['mp4'],
}: VideoPlayerProps) => {
	const [play, setPlay] = useState(false)
	const [duration, setDuration] = useState(0)
	const [time, setTime] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [fullscreen, setFullscreen] = useState(false)
	const [pictureInPicture, setPictureInPicture] = useState(false)
	const [mute, setMute] = useState(false)
	const [volume, setVolume] = useState(5)

	useEffect(() => {
		const handleFullscreenChange = () => {
			if (fullscreen && !document.fullscreenElement) setFullscreen(false)
		}

		document.addEventListener('fullscreenchange', handleFullscreenChange)

		return () => {
			document.removeEventListener('keydown', handleFullscreenChange)
		}
	}, [setFullscreen, fullscreen])

	const aspectRatioClasses = aspectRatios[aspect]

	const handleScrubChange = (time: number) => {
		setTime(time)
		setCurrentTime(time)
	}

	const handleEnded = () => {
		setPlay(false)
		handleScrubChange(0)
	}

	const handleVolume = (volume: number) => {
		setVolume(volume)
		volume === 0 ? setMute(true) : setMute(false)
	}

	const handleTogglePlay = () => setPlay(!play)

	const handleMute = () => setMute(!mute)

	const handleFullscreen = () => {
		setFullscreen(!fullscreen)
		if (typeof document !== null) {
			const player = document.getElementById('player')
			if (player) {
				if (!fullscreen) {
					player.requestFullscreen()
				} else document.exitFullscreen()
			}
		}
	}

	const handlePiP = () => {
		setPictureInPicture(!pictureInPicture)
	}

	return (
		<div
			id='player'
			className={`video-player w-full dark bg-black group ${className} relative ${
				fullscreen ? 'fullscreen' : ''
			}`}
		>
			<figure
				className={`video-figure overflow-hidden flex items-center relative ${aspectRatioClasses}`}
			>
				<Video
					src={src}
					poster={poster}
					controls={controls}
					loop={loop}
					setDuration={setDuration}
					setTime={setTime}
					currentTime={currentTime}
					togglePlay={handleTogglePlay}
					onEnded={handleEnded}
					play={play}
					muted={mute}
					preload={preload}
					fallback={fallback}
					volume={volume}
					formats={formats}
					pictureInPicture={pictureInPicture}
				/>
			</figure>
			{!controls && (
				<VideoControls
					duration={duration}
					time={time}
					togglePlay={handleTogglePlay}
					play={play}
					onFullscreen={handleFullscreen}
					fullscreen={fullscreen}
					onMute={handleMute}
					muted={mute}
					onScrubChange={handleScrubChange}
					onVolume={handleVolume}
					onPIP={handlePiP}
				/>
			)}
		</div>
	)
}

export default VideoPlayer
