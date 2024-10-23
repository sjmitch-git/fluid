import React, { useState, useEffect } from 'react'

import {
	FaPlay,
	FaPause,
	FaExpand,
	FaCompress,
	FaVolumeMute,
	FaVolumeUp,
	FaClosedCaptioning,
} from 'react-icons/fa'

import { MdPictureInPictureAlt } from 'react-icons/md'

import { Button, Select } from '..'

import { VideoControlProps } from './types'

const soundControl = (
	muted: boolean,
	onMute: any,
	duration: number,
	volumeLevel: number,
	handleVolumeChange: any
) => {
	return (
		<div
			id='sound'
			className='flex gap-1 items-center'
		>
			<Button
				title={muted ? 'Unmute Sound' : 'Mute Sound'}
				onClick={onMute}
				background='transparent'
				color='light'
				size='sm'
			>
				{muted ? <FaVolumeMute /> : <FaVolumeUp />}
				<span className='sr-only'>Toggle Mute Sound</span>
			</Button>
			<input
				type='range'
				min='0'
				max='10'
				step='1'
				value={volumeLevel}
				onChange={handleVolumeChange}
				className='volume-slider w-16 hidden lg:block'
				disabled={duration === 0}
			/>
		</div>
	)
}

const fullscreenControl = (fullscreen: boolean, onFullscreen: any, duration: number) => {
	return (
		<div id='fullscreen'>
			<Button
				title={fullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
				onClick={onFullscreen}
				background='transparent'
				color='light'
				size='sm'
				disabled={duration === 0}
			>
				{fullscreen ? <FaCompress /> : <FaExpand />}
				<span className='sr-only'>Toggle Fullscreen</span>
			</Button>
		</div>
	)
}

const pipControl = (onPIP: any, duration: number) => {
	return (
		<div id='pip'>
			<Button
				title='Toggle Picture in Picture'
				onClick={onPIP}
				background='transparent'
				color='light'
				size='sm'
				className='lg:-ml-2'
				disabled={duration === 0}
			>
				<MdPictureInPictureAlt />
				<span className='sr-only'>Toggle Picture in Picture</span>
			</Button>
		</div>
	)
}

const CaptionsControl = (handleCaptionChange: any, tracks: string[], srcLangs: string[]) => {
	const [showSelect, setShowSelect] = useState(false)

	const onCaptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setShowSelect(false)
		if (handleCaptionChange) handleCaptionChange(e.target.value)
	}

	return tracks ? (
		<div
			id='captions-control'
			className='relative'
		>
			<Button
				title='Toggle caption options'
				onClick={() => setShowSelect(!showSelect)}
				background='transparent'
				color='light'
				size='sm'
				className='lg:-ml-2'
			>
				<FaClosedCaptioning />
				<span className='sr-only'>Toggle caption options</span>
			</Button>
			<Select
				title='Select Captions'
				className={`!bg-light !text-dark bottom-8 right-0 absolute ${
					showSelect ? 'block' : 'hidden'
				}`}
				onChange={onCaptionChange}
				dropdownSize='sm'
				rows={tracks.length + 1}
			>
				<>
					<option value='-1'>off</option>
					{tracks.map((_track, index) => (
						<option
							key={index}
							value={`${index}`}
						>
							{srcLangs[index]}
						</option>
					))}
				</>
			</Select>
		</div>
	) : null
}

const toHHMMSS = (secs: any) => {
	secs = secs || 0
	let sec_num = parseInt(secs, 10)
	let hours = Math.floor(sec_num / 3600)
	let minutes = Math.floor(sec_num / 60) % 60
	let seconds = sec_num % 60

	return [hours, minutes, seconds]
		.map((v) => (v < 10 ? '0' + v : v))
		.filter((v, i) => v !== '00' || i > 0)
		.join(':')
}

const VideoControls = ({
	duration,
	time = 0,
	togglePlay,
	play = false,
	fullscreen,
	onFullscreen,
	muted,
	onMute,
	onScrubChange,
	onVolume,
	onPIP,
	onCaption,
	controlOptions,
	progressBg,
	progressColor,
	tracks,
	srcLangs,
}: VideoControlProps) => {
	const [scrubRange, setScrubRange] = useState(0)
	const [volumeLevel, setVolumeLevel] = useState(5)

	useEffect(() => {
		if (time) setScrubRange((time / duration) * 100)
		else setScrubRange(0)
	}, [time, duration])

	let scrubStyle = {
		backgroundImage: `linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${scrubRange}%, ${progressBg} ${scrubRange}%, ${progressBg} 100%)`,
	}

	const handleScrubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setScrubRange(Number(event.target.value))
		if (onScrubChange) onScrubChange((scrubRange * duration) / 100)
	}

	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = Number(event.target.value)
		setVolumeLevel(value)
		if (onVolume) onVolume(value)
	}

	const handleCaptionChange = (value: string) => {
		if (onCaption) onCaption(value)
	}

	return (
		<div className='bg-gradient-to-t from-black from-60% to-transparent text-light absolute bottom-0 w-full flex flex-col justify-between opacity-0 group-hover:opacity-100'>
			<div className={`mx-2 ${duration > 0 ? 'block' : 'hidden'}`}>
				<input
					type='range'
					min='0'
					max='100'
					step='any'
					id='scrubRange'
					value={scrubRange}
					onChange={handleScrubChange}
					onInputCapture={handleScrubChange}
					style={scrubStyle}
					className='w-full rounded-none [&&::-webkit-slider-thumb]:duration-500 [&&::-webkit-slider-thumb]:transition-all [&&::-webkit-slider-thumb]:cursor-grab h-1 cursor-pointer appearance-none [&&::-webkit-slider-thumb]:appearance-none'
				/>
			</div>
			<div className='flex justify-between'>
				<p className='flex justify-start gap-2 items-center'>
					<Button
						title={play ? 'Pause' : 'Play'}
						onClick={togglePlay}
						background='transparent'
						color='light'
						size='sm'
					>
						{play ? <FaPause /> : <FaPlay />}
						<span className='sr-only'>Toggle Play</span>
					</Button>
					<span className='video-time font-mono text-sm'>
						<time>{toHHMMSS(time)}</time>{' '}
						{duration > 0 && (
							<span>
								/ <time>{toHHMMSS(duration)}</time>
							</span>
						)}
					</span>
				</p>
				<div className='flex justify-end gap-2 items-center'>
					{controlOptions
						? controlOptions.map((option, index) => {
								switch (option) {
									case 'sound':
										return (
											<div key={index}>
												{soundControl(
													muted,
													onMute,
													duration,
													volumeLevel,
													handleVolumeChange
												)}
											</div>
										)
									case 'fullscreen':
										return (
											<div key={index}>
												{fullscreenControl(
													fullscreen,
													onFullscreen,
													duration
												)}
											</div>
										)
									case 'pip':
										return <div key={index}>{pipControl(onPIP, duration)}</div>
									case 'captions':
										return (
											<div key={index}>
												{CaptionsControl(
													handleCaptionChange,
													tracks || [],
													srcLangs || []
												)}
											</div>
										)
									default:
										return null
								}
						  })
						: null}
				</div>
			</div>
		</div>
	)
}

export default VideoControls
