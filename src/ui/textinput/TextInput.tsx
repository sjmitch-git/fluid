'use client'

import { useState, useRef } from 'react'

import { Input, Label } from '@/ui'

import { TextInputProps } from './types'

const TextInput = ({
	type = 'text',
	name = 'name',
	id = 'counter',
	className = 'font-semibold',
	value,
	onInputChange,
	size = 'md',
	label,
	layout = 'col',
	title,
	hint = false,
	placeholder,
	inputStyles = 'border-neutral',
	rounded = 'md',
	required,
	autocomplete = 'off',
	pattern,
}: TextInputProps) => {
	const [total, setTotal] = useState(value)
	const [error, setError] = useState(false)
	const input = useRef<HTMLInputElement>(null!)

	const handleValueChange = (value: string) => {
		setTotal(value)
		onInputChange(value)
		input.current.value = value
		ifError(value)
	}

	const handleChange = (e: any) => {
		const value = e.target.value
		handleValueChange(value)
	}

	const ifError = (value: string) => {
		console.log('if error', value)
	}

	return (
		<Label
			label={label}
			layout={layout}
			forId={id}
			size={size}
			type={type}
			required={required}
			className={`label ${className}`}
			data-testid={`label-${name}`}
		>
			<Input
				name={name}
				id={id}
				type={type}
				value={total}
				ref={input}
				onChange={handleChange}
				data-testid={`input-${name}`}
				className={inputStyles}
				rounded={rounded}
				size={size}
				title={title}
				placeholder={placeholder}
				hint={hint}
				autocomplete={autocomplete}
				required={required}
				pattern={pattern}
			/>
		</Label>
	)
}

export default TextInput
