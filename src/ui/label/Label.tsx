'use client'

import React from 'react'

import { LabelProps } from './types'

const defaultStyles = 'font-semibold'

const fileClasses =
	'bg-dark text-light dark:bg-light dark:text-dark rounded-md p-[1em] flex items-center justify-center whitespace-nowrap !w-auto'

const requiredClasses = "after:text-accent after:content-['_*']"

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-2xl',
}

const layouts = {
	col: 'flex flex-col items-start gap-2',
	row: 'grid grid-cols-3 items-start gap-4',
	row_reverse: 'flex flex-wrap justify-end flex-row-reverse gap-4 items-center',
}

const widthClasses = (type: string) => {
	return type === 'checkbox'
		? 'w-auto'
		: type === 'radio'
		? 'w-auto'
		: type === 'color'
		? 'w-auto'
		: type === 'number'
		? 'w-auto'
		: 'w-full'
}

const Label = ({
	className = defaultStyles,
	style,
	forId,
	size = 'md',
	layout = 'col',
	label,
	required,
	type = 'text',
	children,
}: LabelProps) => {
	const sizeClasses = sizes[size]
	const layoutClasses = layouts[layout]

	return (
		<label
			className={`label group relative cursor-pointer w-full ${className} ${sizeClasses} ${layoutClasses} text-dark dark:text-light  ${type}`}
			data-testid='label'
			htmlFor={forId}
			style={style}
		>
			<span
				className={`inline-block [&:has(svg)]:w-full ${layout === 'row' ? 'pt-2' : ''} ${
					type === 'file' ? fileClasses : ''
				} ${required ? requiredClasses : ''}`}
			>
				{label} {type === 'file' && <span className='sr-only'>Upload file icon</span>}
			</span>
			<div
				className={`${widthClasses(
					type
				)} col-span-2 [&:has(input.w-0)]:absolute [&:has(input.password)]:relative`}
			>
				{children}
			</div>
		</label>
	)
}

export default Label
