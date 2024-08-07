import React, { useState, useEffect } from 'react'

import { FaPlay, FaPause, FaExpand, FaCompress, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

import { MdPictureInPictureAlt } from 'react-icons/md'

import { Button } from '@/ui'

import { VideoControlProps } from './types'

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
}: VideoControlProps) => {
	const [scrubRange, setScrubRange] = useState(0)
	const [volumeLevel, setVolumeLevel] = useState(5)

	useEffect(() => {
		if (time) setScrubRange((time / duration) * 100)
		else setScrubRange(0)
	}, [time, duration])

	const clr1 = '#ccc'
	const clr2 = '#333'

	let scrubStyle = {
		backgroundImage: `linear-gradient(to right, ${clr1} 0%, ${clr1} ${scrubRange}%, ${clr2} ${scrubRange}%, ${clr2} 100%)`,
	}

	let rangeStyle = {
		backgroundImage: `linear-gradient(to right, ${clr1} 0%, ${clr1} ${
			volumeLevel * 10
		}%, ${clr2} ${volumeLevel * 10}%, ${clr2} 100%)`,
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

	return (
		<div className='bg-black text-light overflow-hidden absolute top-full lg:bottom-0 lg:top-auto w-full flex flex-col justify-between lg:opacity-0 hover:opacity-100'>
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
					className='w-full rounded-none [&&::-webkit-slider-thumb]:duration-500 [&&::-webkit-slider-thumb]:transition-all [&&::-webkit-slider-thumb]:cursor-grab h-1 cursor-pointer appearance-none [&&::-webkit-slider-thumb]:appearance-none [&&::-webkit-slider-thumb]:w-4'
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
				<p className='flex justify-end gap-2 items-center'>
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
						style={rangeStyle}
						disabled={duration === 0}
					/>
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
				</p>
			</div>
		</div>
	)
}

export default VideoControls
