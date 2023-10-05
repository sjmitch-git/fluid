import React from 'react'

import { LabelProps } from './types'

import { Button } from '@/ui'
import { FaEye } from 'react-icons/fa'

const defaultStyles = 'font-semibold'

const fileClasses =
	'bg-secondary text-light rounded-md p-[1em] flex items-center justify-center shadow hover:shadow-lg scale-100 hover:scale-105'

const requiredClasses = "after:text-danger after:content-['_*']"

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const layouts = {
	col: 'flex flex-col items-start gap-2',
	row: 'grid grid-cols-3 items-center gap-4',
	inline: 'flex flex-wrap justify-end flex-row-reverse gap-4 items-center',
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
	size = 'md',
	layout = 'col',
	label,
	required,
	type = 'text',
	onToggleType,
	hint,
	children,
}: LabelProps) => {
	let sizeClasses = sizes[size]
	let layoutClasses = layouts[layout]
	return (
		<label
			className={`label group relative cursor-pointer w-full ${className} ${sizeClasses} ${layoutClasses} ${type}`}
			data-testid='label'
		>
			<span
				className={`inline-block ${type === 'file' ? fileClasses : ''} ${
					required ? requiredClasses : ''
				}`}
			>
				{label}{' '}
				{type === 'password' && (
					<Button
						onClick={onToggleType}
						className='absolute right-0 top-0 !p-0'
						size={size}
						layout='circle'
						background='transparent'
						color='info'
						title='Toggle password visiblity'
					>
						<FaEye />
					</Button>
				)}
			</span>
			<div className={`${widthClasses(type)} col-span-2`}>{children}</div>
			{hint && (
				<div
					className={`hint font-normal text-[.90em] w-full col-span-3 group-[.flex-row-reverse]:-mt-2 leading-tight`}
				>
					{hint}
				</div>
			)}
		</label>
	)
}

export default Label
