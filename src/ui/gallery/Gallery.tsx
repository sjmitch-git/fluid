import React from 'react'
import { Figure } from '@/ui'
import { GalleryProps } from './types'

const defaultStyles = 'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6'

const getCaption = (name: string, caption: boolean): string => {
	return caption ? name : ''
}

const Gallery = ({ className = '', aspect, data, caption = true }: GalleryProps) => {
	return (
		<div className={`gallery group ${defaultStyles} ${className}`}>
			{data.map((item, index) => (
				<Figure
					src={item.src}
					alt={item.name}
					caption={getCaption(item.name, caption)}
					key={index}
					aspect={aspect}
				/>
			))}
		</div>
	)
}

export default Gallery
