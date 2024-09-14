'use client'

import { useEffect, useState } from 'react'

import { Input, Label, Fieldset } from '@/ui'

import { RadioGroupProps } from './types'

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
	hideInput,
	columns = 1,
	size = 'md',
	legendAlign = 'center',
	legendBold = true,
	hasBorder = false,
	spacing = '4',
	rounded = 'full',
}: RadioGroupProps) => {
	const [checked, setChecked] = useState('')

	const layoutStyles = layouts[columns]

	useEffect(() => {
		if (selected) setChecked(selected)
	}, [selected])

	return (
		<Fieldset
			legendText={legend}
			legendSize={size}
			legendAlign={legendAlign}
			isBold={legendBold}
			hasBorder={hasBorder}
		>
			<div
				className={`radiogroup grid ${layoutStyles} gap-${spacing} ${className} ${
					icons ? 'icons' : ''
				}`}
			>
				{data.map((item) => {
					return (
						<Label
							key={item.id}
							label={getIcon ? getIcon(item.id) : item.name}
							layout='row_reverse'
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
								rounded={rounded}
							/>
						</Label>
					)
				})}
			</div>
		</Fieldset>
	)
}

export default RadioGroup
