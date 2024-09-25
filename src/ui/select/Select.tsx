'use client'

import { useState, useEffect } from 'react'

import { SelectProps } from './types'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const Select = ({
	className = '',
	dropdownSize = 'md',
	onChange,
	placeholder,
	name = 'select',
	disabled,
	options,
	defaultValue = '',
	rounded = 'none',
	nocaret,
}: SelectProps) => {
	const [value, setValue] = useState<string | number>()

	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value
		setValue(value)
		if (onChange) onChange(event)
	}

	const sizeClasses = sizes[dropdownSize]

	const renderOptions = () => {
		return (Array.isArray(options) ? options : []).map((option) => {
			const optionValue =
				typeof option === 'string' || typeof option === 'number' ? option : option.value
			const optionLabel =
				typeof option === 'string' || typeof option === 'number' ? option : option.label

			return (
				<option
					key={optionValue}
					value={optionValue}
				>
					{optionLabel}
				</option>
			)
		})
	}

	return (
		<select
			name={name}
			onChange={handleChange}
			value={value}
			disabled={disabled}
			className={`form-select select-dropdown cursor-pointer border-2 dark:bg-dark dark:text-light color-scheme:light font-normal dark:[color-scheme:dark] ${className} ${sizeClasses} rounded-${rounded}  ${
				nocaret ? 'bg-none pr-3' : 'bg-right'
			}`}
			aria-label='select'
		>
			{placeholder && (
				<option
					value=''
					disabled
				>
					{placeholder}
				</option>
			)}
			{renderOptions()}
		</select>
	)
}

export default Select
