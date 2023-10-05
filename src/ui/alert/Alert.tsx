import React from 'react'

import { AlertProps } from './types'

import { CloseButton } from '@/ui'

const defaultStyles = 'border-s-8'
const outlineStyles = 'rounded border-0 outline outline-2'
const solidStyles = `solid rounded border-none`

const statuses = {
	info: 'border-info bg-[var(--info-color-25)] outline-info',
	success: 'border-success bg-[var(--success-color-25)] outline-success',
	warning: 'border-warning bg-[var(--warning-color-25)] outline-warning',
	error: 'border-error bg-[var(--error-color-25)] outline-error',
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
	status = 'info',
	layout = 'default',
	title,
	message,
	dismissable = false,
	onClick,
}: AlertProps) => {
	let sizeClasses = sizes[size]
	let statusClasses

	if (layout === 'solid') {
		statusClasses = `${solidStatuses[status]} text-light`
	} else {
		statusClasses = `${statuses[status]} text-dark`
	}

	let layoutClasses = layouts[layout]

	return (
		<blockquote
			className={`alert group relative ${className} ${sizeClasses} ${statusClasses} ${layoutClasses}`}
			data-testid='alert'
			role='alert'
		>
			{title && (
				<h4
					className='mt-2 mb-0 uppercase font-bold opacity-85'
					role='heading'
				>
					{title}
				</h4>
			)}
			<div
				className='text-size-inherit mb-4 mt-4'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>

			{dismissable && (
				<CloseButton
					size={size}
					onClick={onClick}
				/>
			)}
		</blockquote>
	)
}

export default Alert
