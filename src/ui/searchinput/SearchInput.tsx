'use client'

import { FaSearch } from 'react-icons/fa'

import { useState, useRef } from 'react'

import { Input, Button } from '@/ui'

import { SearchInputProps } from './types'

const SearchInput = ({
	name = 'search',
	id = 'search',
	className = 'font-semibold',
	label = 'Search',
	icon,
	onButtonSubmit,
	size = 'md',
	rounded = 'md',
	placeholder,
	inputStyles = 'border-neutral',
	btnShape = 'circle',
	btnBackground = 'dark',
	btnColor = 'light',
	autocomplete = 'off',
	autocorrect = 'off',
	spellcheck = false,
	spacing = '0',
}: SearchInputProps) => {
	const [disabled, setDisabled] = useState(true)
	const input = useRef<HTMLInputElement>(null!)

	const handleClick = () => {
		const value = input.current.value
		onButtonSubmit(value)
		console.log('click', value)
	}

	const handleChange = (e: any) => {
		const value = e.target.value
		console.log('handleChange', value)
		value ? setDisabled(false) : setDisabled(true)
	}

	return (
		<div
			className={`search-box flex ${className} gap-${spacing} text-dark dark:text-light`}
			data-testid={name}
		>
			<Input
				name={name}
				id={id}
				type='search'
				ref={input}
				data-testid={`input-${name}`}
				className={inputStyles}
				size={size}
				placeholder={placeholder}
				autocomplete={autocomplete}
				autocorrect={autocorrect}
				spellcheck={spellcheck}
				aria-label='Search'
				onChange={handleChange}
				rounded={rounded}
			/>
			<Button
				layout={btnShape}
				size={size}
				background={btnBackground}
				color={btnColor}
				onClick={handleClick}
				disabled={disabled}
				title='Submit'
			>
				{icon ? <FaSearch /> : label}
				<span className='sr-only'>Search</span>
			</Button>
		</div>
	)
}

export default SearchInput
