import React from 'react'

import Image from 'next/image'

import { CardImageProps } from './types'

const defaultStyles = 'relative w-full group-[.row]:max-w-sm group-[.row]:mb-auto'

const aspects = {
	landscape: 'aspect-landscape',
	portrait: 'aspect-portrait',
	square: 'aspect-square',
	video: 'aspect-video',
}

const CardImage = ({
	className = defaultStyles,
	title,
	src,
	aspect = 'landscape',
}: CardImageProps) => {
	let aspectClasses = aspects[aspect]
	return (
		<div className={`card-image peer ${className}`}>
			<figure className={`card-figure relative ${aspectClasses}`}>
				<Image
					src={src}
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='img object-cover'
					alt={title}
				/>
			</figure>
		</div>
	)
}

export default CardImage
