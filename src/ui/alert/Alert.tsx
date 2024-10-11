import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { AlertProps } from './types'

import { CloseButton } from '@/ui'

const defaultStyles = 'border-s-8'
const outlineStyles = 'rounded border-0 outline outline-2'
const solidStyles = `solid rounded border-none`

const statuses = {
	info: 'border-info bg-info/25 outline-info',
	success: 'border-success bg-success/25 outline-success',
	warning: 'border-warning bg-warning/25 outline-warning',
	error: 'border-error bg-error/25 outline-error',
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
	style,
	size = 'md',
	status = 'info',
	layout = 'default',
	title,
	message,
	dismissable = false,
	onClick,
}: AlertProps) => {
	const sizeClasses = useMemo(() => sizes[size], [size])
	const layoutClasses = useMemo(() => layouts[layout], [layout])

	const statusClasses = useMemo(
		() =>
			layout === 'solid'
				? `${solidStatuses[status]} text-light`
				: `${statuses[status]} text-dark`,
		[layout, status]
	)

	return (
		<blockquote
			className={twMerge(
				`alert group relative ${sizeClasses} ${statusClasses} ${layoutClasses}`,
				className
			)}
			style={style}
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
				className='text-size-inherit mb-[1em] mt-[1em]'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>

			{dismissable && (
				<CloseButton
					size={size}
					onClick={onClick}
					className='right-2 top-2'
				/>
			)}
		</blockquote>
	)
}

export default Alert
