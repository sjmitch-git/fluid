'use client'

import React from 'react'

import { forwardRef, useState } from 'react'

import { InputProps } from './types'

export type InputRef = HTMLInputElement

const defaultStyles = 'border-gray-400 shadow-sm font-normal'

const sizes = {
	sm: 'text-base',
	md: 'text-lg',
	lg: 'text-xl',
	xl: 'text-2xl',
	inherit: 'text-inherit leading-inherit',
}

const typeClasses = (type: string) => {
	return type === 'checkbox'
		? 'form-checkbox rounded-md w-[1.5em] h-[1.5em] cursor-pointer text-secondary'
		: type === 'radio'
		? 'form-radio w-[1.5em] h-[1.5em] cursor-pointer text-secondary'
		: type === 'color'
		? 'form-color cursor-pointer aspect-square w-[2em] h-[2em]'
		: type === 'number'
		? 'form-input text-center rounded-md [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
		: type === 'file'
		? 'hidden'
		: type === 'range'
		? 'h-[.5em] w-full rounded [&&::-webkit-slider-thumb]:cursor-grab [&&::-webkit-slider-thumb]:appearance-none [&&::-webkit-slider-thumb]:bg-current [&&::-webkit-slider-thumb]:text-current [&&::-webkit-slider-thumb]:h-[1em] [&&::-webkit-slider-thumb]:w-[1em] [&&::-webkit-slider-thumb]:rounded-full'
		: 'form-input w-full rounded-md'
}

export const Input = forwardRef<InputRef, InputProps>(function Input(props, ref) {
	const {
		type = 'text',
		size = 'inherit',
		autocomplete,
		name,
		className = defaultStyles,
		required,
		readonly = false,
		tabindex,
		min,
		max,
		step,
		pattern,
		title,
		value,
		checked,
		accept,
		multiple,
		placeholder,
		list,
		onchange,
		hidden,
	} = props

	let sizeClasses = sizes[size]
	return (
		<input
			className={`input ${typeClasses(
				type
			)} group ${className} ${sizeClasses} required:bg-accent invalid:ring-danger disabled:bg-neutral`}
			type={type}
			name={name}
			autoComplete={autocomplete}
			required={required}
			hidden={hidden}
			readOnly={readonly}
			tabIndex={tabindex}
			ref={ref}
			min={min}
			max={max}
			step={step}
			pattern={pattern}
			title={title}
			placeholder={placeholder}
			defaultValue={value}
			defaultChecked={checked}
			accept={accept}
			multiple={multiple}
			list={list}
			onChange={onchange}
			onInput={onchange}
			data-testid='input'
		/>
	)
})
