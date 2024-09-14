import React from 'react'

import { AutocompleteProps } from './types'

import { Input, Label } from '@/ui'

const defaultStyles = ''

const Autocomplete = ({
	className = defaultStyles,
	size = 'md',
	data,
	list,
	required,
	name,
	placeholder = 'Please Select',
	onChange,
	autocomplete,
	label,
	layout = 'row',
	rounded,
}: AutocompleteProps) => {
	return (
		<Label
			label={label}
			layout={layout}
			required={required}
			size={size}
		>
			<Input
				list={list}
				placeholder={placeholder}
				required={required}
				name={name || list}
				onChange={onChange}
				className={`autocomplete group ${className}`}
				size={size}
				autocomplete={autocomplete}
				data-testid='autocomplete'
				rounded={rounded}
			/>

			<datalist
				className='datalist bg-light text-dark dark:bg-dark dark:text-light dark:[color-scheme:dark]'
				id={list}
				data-testid='datalist'
			>
				{data.map((el, index) => (
					<option
						key={index}
						value={el}
					/>
				))}
			</datalist>
		</Label>
	)
}

export default Autocomplete
