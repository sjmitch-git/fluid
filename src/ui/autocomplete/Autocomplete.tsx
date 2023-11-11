import React from 'react'

import { AutocompleteProps } from './types'

import { Input } from '@/ui'

const defaultStyles = ''

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const Autocomplete = ({
	className = defaultStyles,
	size = 'md',
	data,
	list,
	autocomplete = 'off',
	required,
	name,
	placeholder = 'Please Select',
	onchange,
}: AutocompleteProps) => {
	let sizeClasses = sizes[size]
	return (
		<>
			<Input
				list={list}
				placeholder={placeholder}
				autocomplete={autocomplete}
				required={required}
				name={name || list}
				onchange={onchange}
				className={`autocomplete group ${className} ${sizeClasses}`}
				data-testid='autocomplete'
			/>

			<datalist
				className='datalist'
				id={list}
				data-testid='datalist'
			>
				{data.map((el, index) => (
					<option
						key={index}
						value={el}
					>
						{el}
					</option>
				))}
			</datalist>
		</>
	)
}

export default Autocomplete
