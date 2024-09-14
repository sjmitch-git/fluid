'use client'

import { FaEye } from 'react-icons/fa'

import { useState } from 'react'

import { Input, Button, Label } from '@/ui'

import { PasswordInputProps } from './types'

const PasswordInput = ({
	name = 'search',
	className = 'font-semibold',
	label = 'Password',
	size = 'md',
	rounded = 'md',
	placeholder,
	autocomplete,
	pattern,
	inputStyles,
	hint = true,
	title,
	required = true,
	layout = 'col',
}: PasswordInputProps) => {
	const [type, setType] = useState<'password' | 'text'>('password')

	const toggleType = () => {
		setType((prevType) => (prevType === 'password' ? 'text' : 'password'))
	}

	return (
		<Label
			label={label}
			className={className}
			size={size}
			required={required}
			layout={layout}
		>
			<Input
				name={name}
				id={name}
				type={type}
				pattern={pattern}
				data-testid={`input-${name}`}
				className={`password ${inputStyles}`}
				size={size}
				placeholder={placeholder}
				autocomplete={autocomplete}
				rounded={rounded}
				title={title}
				hint={hint}
				required={required}
			/>
			<Button
				onClick={toggleType}
				className='absolute right-2 top-4 !p-0'
				size={size}
				layout='circle'
				background='transparent'
				color='info'
				title='Toggle password visiblity'
			>
				<FaEye />
			</Button>
		</Label>
	)
}

export default PasswordInput
