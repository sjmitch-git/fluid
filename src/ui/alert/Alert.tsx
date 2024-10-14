import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { AlertProps } from './types'

import { CloseButton, Heading, Badge } from '@/ui'

const defaultStyles = 'border-s-8'
const outlineStyles = 'rounded border-0 outline outline-2'
const solidStyles = `solid rounded border-none`

const statuses = {
	info: 'border-info bg-info-dark outline-info',
	success: 'border-success bg-success-dark outline-success',
	warning: 'border-warning bg-warning-dark outline-warning',
	error: 'border-error bg-error-dark outline-error',
}

const solidStatuses = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	error: 'bg-error',
}

const layouts = {
	default: defaultStyles,
	outline: outlineStyles,
	solid: solidStyles,
}

const Alert = ({
	className = '',
	style,
	status = 'info',
	layout = 'default',
	title,
	message,
	dismissable = false,
	onClick,
	badge,
	badgeBackground = 'dark',
	badgeColor = 'light',
}: AlertProps) => {
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
				`alert group relative px-2 md:px-3 lg:px-4 py-1 ${statusClasses} ${layoutClasses}`,
				className
			)}
			style={style}
			data-testid='alert'
			role='alert'
		>
			{title && (
				<Heading
					level={5}
					className={`mt-2 mb-0 uppercase font-bold opacity-85 relative`}
				>
					{badge && (
						<Badge
							background={badgeBackground}
							color={badgeColor}
							size='md'
							layout='circle'
							position='left'
							className='top-0 start-0 relative mr-2'
						>
							{badge}
						</Badge>
					)}
					{title}
				</Heading>
			)}
			<div
				className='text-base md:text-lg lg:text-xl mb-[1em] mt-[1em]'
				dangerouslySetInnerHTML={{ __html: message }}
			></div>

			{dismissable && (
				<CloseButton
					size='md'
					onClick={onClick}
					className='absolute right-2 top-2'
				/>
			)}
		</blockquote>
	)
}

export default Alert
