import React from 'react'

import { CarouselProps } from './types'

const defaultStyles = 'border'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const Carousel = ({ className = defaultStyles, size = 'md', children }: CarouselProps) => {
	let sizeClasses = sizes[size]
	return (
		<div
			className={`carousel group ${className} ${sizeClasses}`}
			data-testid='carousel'
		>
			{children}
		</div>
	)
}

export default Carousel
