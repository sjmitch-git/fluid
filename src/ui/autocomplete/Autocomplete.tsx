import React from 'react'

import { AutocompleteProps } from './types'

import { Input } from '@/ui'

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
}: AutocompleteProps) => {
	return (
		<>
			<Input
				list={list}
				placeholder={placeholder}
				autocomplete='off'
				required={required}
				name={name || list}
				onChange={onChange}
				className={`autocomplete group ${className}`}
				size={size}
				data-testid='autocomplete'
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
		</>
	)
}

export default Autocomplete
