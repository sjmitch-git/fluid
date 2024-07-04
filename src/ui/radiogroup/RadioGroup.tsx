'use client'

import { useEffect, useState } from 'react'

import { Input, Label } from '@/ui'

import { RadioGroupProps } from './types'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-xl',
	xl: 'text-2xl',
}

const layouts = {
	1: 'grid-cols-1',
	2: 'grid-cols-2',
	3: 'grid-cols-3',
	4: 'grid-cols-4',
	5: 'grid-cols-5',
	6: 'grid-cols-6',
}

const RadioGroup = ({
	className = '',
	labelStyles = 'font-normal',
	legend,
	data,
	name,
	getIcon,
	icons = false,
	onChange,
	selected,
	disabled,
	hideInput,
	columns = 1,
	size = 'md',
}: RadioGroupProps) => {
	const [checked, setChecked] = useState('')

	const layoutStyles = layouts[columns]

	useEffect(() => {
		if (selected) setChecked(selected)
	}, [selected])

	const sizeClasses = sizes[size]

	return (
		<fieldset
			className={`fieldset max-w-sm ${sizeClasses}`}
			disabled={disabled}
		>
			{legend && (
				<legend className={`font-semibold mb-4 text-dark dark:text-light`}>{legend}</legend>
			)}
			<div
				className={`radiogroup grid ${layoutStyles} gap-4 ${className} ${
					icons ? 'icons' : ''
				}`}
			>
				{data.map((item) => {
					return (
						<Label
							key={item.id}
							label={getIcon ? getIcon(item.id) : item.name}
							layout='inline'
							type='radio'
							className={labelStyles}
							size={size}
						>
							<Input
								name={name}
								type='radio'
								value={item.id}
								onChange={onChange}
								checked={item.id === checked}
								className={`${hideInput ? 'opacity-0 w-0 h-0 -ml-1' : ''}`}
								size={size}
							/>
						</Label>
					)
				})}
			</div>
		</fieldset>
	)
}

export default RadioGroup
