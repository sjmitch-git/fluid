'use client'

import React, { useRef } from 'react'

import { Input } from '@/ui'
import { SwitchProps } from './types'

const requiredClasses = "after:text-accent after:content-['_*']"

const colors = {
	info: 'peer-checked:bg-info',
	success: 'peer-checked:bg-success',
	warning: 'peer-checked:bg-warning',
	danger: 'peer-checked:bg-danger',
	primary: 'peer-checked:bg-primary',
	secondary: 'peer-checked:bg-secondary',
	current: 'peer-checked:bg-current',
}

const sizes = {
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-2xl',
}

const Switch = ({
	label,
	labelIsBold,
	labelSize = 'base',
	className = '',
	style,
	onChange,
	checked,
	defaultChecked,
	name,
	shape = 'circle',
	required = false,
	switchColor = 'info',
	thin = false,
	disabled,
	showHint = false,
	hint,
}: SwitchProps) => {
	const checkbox = useRef<HTMLInputElement>(null!)

	const colorClasses = colors[switchColor]
	const sizeClasses = sizes[labelSize]

	const sliderBeforeClasses = `before:absolute before:h-8 before:w-8 before:bg-white dark:before:bg-dark before:transition-transform before:content-[''] ${
		thin ? 'before:left-0 before:-top-3 before:bg-inherit' : 'before:left-1 before:bottom-1'
	}`

	const handleKeyup = (event: any) => {
		if (event.key !== 'Enter') return
		checkbox.current.checked = !checkbox.current.checked
	}

	const handleChange = (event: any) => {
		if (onChange) onChange(event)
	}

	return (
		<div className='switch-container'>
			<label
				className={`switch-label group relative ${className} ${sizeClasses} ${
					labelIsBold ? 'font-semibold' : 'font-normal'
				} ${
					disabled ? 'cursor-default text-neutral' : 'cursor-pointer'
				} h-8 w-auto flex-row-reverse items-center gap-4 flex row-reverse`}
				style={style}
				onKeyUp={handleKeyup}
			>
				<span className={`switch-text grow ${required ? requiredClasses : ''}`}>
					{label}
				</span>
				<Input
					name={name}
					id={name}
					type='checkbox'
					data-testid={`input-${name}`}
					className={`checkbox peer absolute opacity-0 -left-96`}
					required={required}
					disabled={disabled}
					onChange={handleChange}
					checked={checked}
					defaultChecked={defaultChecked}
					ref={checkbox}
				/>
				<span
					className={`slider block relative bottom-0 left-0 right-0 top-0 ${
						thin ? 'h-2 w-[60px]' : 'h-10 w-[67px]'
					} ${
						disabled ? 'cursor-default' : 'cursor-pointer'
					} bg-neutral transition-transform ${
						shape === 'circle' ? 'rounded-full before:rounded-full' : ''
					} ${sliderBeforeClasses} peer-checked:before:translate-x-7 ${colorClasses}`}
				></span>
			</label>
			{showHint && <p className={`hint text-sm font-normal mt-4 dark:text-light`}>{hint}</p>}
		</div>
	)
}

export default Switch
