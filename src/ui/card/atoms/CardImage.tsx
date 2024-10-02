import React, {useMemo} from 'react'

import { twMerge } from 'tailwind-merge'

import { CardImageProps } from '../types'

const aspects = {
	landscape: 'aspect-landscape',
	portrait: 'aspect-portrait',
	square: 'aspect-square',
	video: 'aspect-video',
}

const CardImage = ({
	className = '',
	title,
	src,
	aspect = 'landscape',
}: CardImageProps) => {

	const aspectClasses = useMemo(() => aspects[aspect], [aspect])

	return (
		<div className={twMerge(`card-image peer relative w-full group-[.row]:max-w-sm group-[.row]:mb-auto`, className)}>
			<figure className={`card-figure relative ${aspectClasses}`}>
				<img
					src={src}
					className={`img object-cover absolute h-full w-full inset-0 text-transparent`}
					alt={title}
				/>
			</figure>
		</div>
	)
}

export default CardImage
