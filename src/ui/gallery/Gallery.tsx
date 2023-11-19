import React from 'react'

import { GalleryProps } from './types'

const defaultStyles = 'border'

const Gallery = ({ className = defaultStyles, children }: GalleryProps) => {
	return (
		<div
			className={`gallery group ${defaultStyles} ${className}`}
			data-testid='gallery'
		>
			{children}
		</div>
	)
}

export default Gallery
