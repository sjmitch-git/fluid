'use client'

import React from 'react'

import { forwardRef } from 'react'

import { InputProps } from './types'

export type InputRef = HTMLInputElement

const defaultStyles = 'border-gray-400 shadow-sm font-normal'

const sizes = {
	sm: 'text-base',
	md: 'text-lg',
	lg: 'text-xl',
	xl: 'text-2xl',
	// inherit: 'text-inherit leading-inherit',
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
		: 'form-input w-full'
}

const styles = {
	required: '!bg-[var(--highlight-color)] !text-dark',
}

export const Input = forwardRef<InputRef, InputProps>(function Input(props, ref) {
	const {
		type = 'text',
		size = 'md',
		autocomplete = 'off',
		name = 'control-name',
		id,
		className = defaultStyles,
		rounded = 'md',
		required = false,
		readonly = false,
		disabled = false,
		hint = false,
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
		onChange,
		hidden,
		ariaLabel,
		autocorrect,
		spellcheck,
	} = props

	const sizeClasses = sizes[size]

	return (
		<>
			<input
				className={`input ${typeClasses(
					type
				)} peer ${className} ${sizeClasses} rounded-${rounded} dark:bg-dark dark:text-light color-scheme:light font-normal dark:[color-scheme:dark] focus-visible:outline-none focus-visible:border-info disabled:bg-neutral disabled:cursor-default disabled:text-dark`}
				type={type}
				name={name}
				id={id}
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
				disabled={disabled}
				onChange={onChange}
				onInput={onChange}
				data-testid={id || name}
				aria-label={ariaLabel}
				autoCorrect={autocorrect}
				spellCheck={spellcheck}
			/>
			{hint && (
				<p className='hint text-sm font-normal mt-1 dark:text-light peer-invalid:bg-accent peer-invalid:text-dark inline-block'>
					{title}
				</p>
			)}
		</>
	)
})
