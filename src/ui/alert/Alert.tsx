import React from 'react'

import { AlertProps } from './types'

const defaultStyles = 'border-s-8'
const outlineStyles = 'rounded border-0 outline outline-2'
const solidStyles = `solid rounded border-none`

const statuses = {
	info: 'border-info bg-[var(--info-color-25)] text-info',
	success: 'border-success bg-[var(--success-color-25)] text-success',
	warning: 'border-warning bg-[var(--warning-color-25)] text-warning',
	error: 'border-error bg-[var(--error-color-25)] text-error',
}

const solidStatuses = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	error: 'bg-error',
}

const sizes = {
	sm: 'text-sm px-4 py-1',
	md: 'text-base px-4 py-1',
	lg: 'text-lg px-4 py-1',
}

const layouts = {
	default: defaultStyles,
	outline: outlineStyles,
	solid: solidStyles,
}

const Alert = ({
	className = '',
	size = 'md',
	status,
	layout = 'default',
	message,
}: AlertProps) => {
	let sizeClasses = sizes[size]
	let statusClasses

	if (status && layout !== 'solid') {
		statusClasses = statuses[status]
	} else if (status && layout === 'solid') {
		statusClasses = solidStatuses[status]
	} else if (!status && layout === 'solid') {
		statusClasses = solidStatuses['info']
	} else {
		statusClasses = statuses['info']
	}

	let layoutClasses = layouts[layout]

	return (
		<blockquote
			className={`alert group relative ${className} ${sizeClasses} ${statusClasses} ${layoutClasses}`}
			data-testid='alert'
			role='alert'
		>
			{status && (
				<h4
					className='mt-2 mb-0 uppercase font-bold group-[.solid]:text-light'
					role='heading'
				>
					{status}
				</h4>
			)}
			<div
				className='text-size-inherit mb-4 mt-4 text-dark group-[.solid]:text-light'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>
		</blockquote>
	)
}

export default Alert
