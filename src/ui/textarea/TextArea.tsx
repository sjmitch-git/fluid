import { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { TextareaProps } from './types'

import { Label } from '..'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const TextArea = ({
	className = '',
	label,
	layout,
	required,
	name = 'textarea',
	placeholder,
	size = 'md',
	onChange,
	rows = 4,
	resize = true,
	maxLength,
	disabled = false,
}: TextareaProps) => {
	const sizeClasses = useMemo(() => sizes[size], [size])

	return (
		<Label
			label={label}
			layout={layout}
			size={size}
			required={required}
			className={twMerge(`font-semibold`, className)}
			data-testid={`label-${name}`}
		>
			<textarea
				className={`form-textarea w-full dark:bg-dark dark:text-light color-scheme:light dark:[color-scheme:dark] border-neutral disabled:bg-neutral disabled:cursor-default disabled:text-dark ${className} ${sizeClasses} ${
					resize ? 'resize' : 'resize-none'
				}`}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={onChange}
				rows={rows}
				maxLength={maxLength}
				disabled={disabled}
			/>
		</Label>
	)
}

export default TextArea
