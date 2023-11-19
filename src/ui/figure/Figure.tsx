'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FigureProps } from './types'
import { Modal } from '@/ui'

const defaultStyles = 'relative h-auto w-full'

const aspects = {
	landscape: 'aspect-[4/3]',
	portrait: 'aspect-[3/4]',
	square: 'aspect-square',
	circle: 'aspect-square',
	video: 'aspect-video',
	phone: 'aspect-[9/16]',
}

const Figure = ({
	className = '',
	caption = '',
	aspect = 'landscape',
	src,
	alt,
	backdrop = 'dark',
}: FigureProps) => {
	let aspectClasses = aspects[aspect]

	const [open, setOpen] = useState(false)

	return (
		<>
			<figure className={`figure group ${defaultStyles} ${className} ${aspectClasses}`}>
				<Image
					src={src}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className={`img object-cover cursor-zoom-in ${
						aspect === 'circle' ? 'rounded-full' : ''
					}`}
					alt={alt}
					onClick={() => setOpen(true)}
				/>
				{caption && (
					<figcaption className='figcaption line-clamp-2 py-2 text-center absolute bottom-0 w-full bg-gray-700/50 text-light'>
						{caption}
					</figcaption>
				)}
			</figure>
			<Modal
				src={src}
				caption={caption || alt}
				alt={alt}
				onClick={() => setOpen(false)}
				open={open}
				theme={backdrop}
			/>
		</>
	)
}

export default Figure
