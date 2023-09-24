import React from 'react'

import { TemplateProps } from './types'

const defaultStyles = 'border'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const Template = ({ className = defaultStyles, size = 'md', children }: TemplateProps) => {
	let sizeClasses = sizes[size]
	return (
		<div
			className={`Template group ${className} ${sizeClasses}`}
			data-testid='template'
		>
			{children}
		</div>
	)
}

export default Template
