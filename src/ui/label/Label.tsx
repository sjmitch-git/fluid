'use client'

import React, { useState } from 'react'

import { LabelProps } from './types'

import { Button, Input } from '@/ui'
import { FaEye } from 'react-icons/fa'

const defaultStyles = 'font-semibold'

const fileClasses =
	'bg-dark text-light dark:bg-light dark:text-dark rounded-md p-[1em] flex items-center justify-center whitespace-nowrap !w-auto'

const requiredClasses = "after:text-warning after:content-['_*']"

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
		>
			<span
				className={`inline-block [&:has(svg)]:w-full ${layout === 'row' ? 'pt-2' : ''} ${
					type === 'file' ? fileClasses : ''
				} ${required ? requiredClasses : ''}`}
			>
				{label} {type === 'file' && <span className='sr-only'>Upload file icon</span>}
				{/* {type === 'password' && (
					<Button
						onClick={toggleType}
						className='absolute right-0 top-0 !p-0'
						size={size}
						layout='circle'
						background='transparent'
						color='info'
						title='Toggle password visiblity'
					>
						<FaEye />
					</Button>
				)} */}
			</span>
			<div className={`${widthClasses(type)} col-span-2 [&:has(input.w-0)]:absolute`}>
				{children}
			</div>
			{/* {hint && (
				<div
					className={`hint font-normal text-[.90em] w-full col-span-3 group-[.flex-row-reverse]:-mt-2 leading-tight`}
				>
					{hint}
				</div>
			)} */}
		</label>
	)
}

export default Label
