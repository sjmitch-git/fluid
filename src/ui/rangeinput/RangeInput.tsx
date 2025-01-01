'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { Input, Label } from '..'
import { RangeInputProps } from './types'

const thumbnailShapes = {
	circle: '[&&::-webkit-slider-thumb]:rounded-full',
	square: '[&&::-webkit-slider-thumb]:rounded-none',
}

const RangeInput = ({
	name = 'range',
	min = 0,
	max = 100,
	defaultValue = 50,
	step = '1',
	label,
	labelIsBold,
	size = 'md',
	layout = 'col',
	title = 'Current value:',
	hint = true,
	required = false,
	rangeActive = '#f59e0b',
	rangeBackground = '#9e9e9e',
	thumbnailColor = '#f59e0b',
	thumbnailShape = 'circle',
	rounded = true,
	style,
	className = '',
	onChange,
}: RangeInputProps) => {
	const [value, setValue] = useState(defaultValue)
	const [scrubRange, setScrubRange] = useState(defaultValue)
	const [modifier, setModifier] = useState(1)

	useEffect(() => {
		setModifier(100 / max)
	}, [max])

	const shapeClasses = useMemo(() => thumbnailShapes[thumbnailShape], [thumbnailShape])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value)
		setValue(newValue)
		setScrubRange(Number(newValue))
		if (onChange) onChange(newValue)
	}

	let scrubStyle = {
		backgroundImage: `linear-gradient(to right, ${rangeActive} 0%, ${rangeActive} ${
			scrubRange * modifier
		}%, ${rangeBackground} ${scrubRange * modifier}%, ${rangeBackground} 100%)`,
		color: `${thumbnailColor}`,
	}

	return (
		<Label
			label={label}
			size={size}
			layout={layout}
			isBold={labelIsBold}
			required={required}
			type='range'
			className={twMerge(`range-label items-baseline`, className)}
			style={style}
		>
			<Input
				name={name}
				type='range'
				value={value}
				min={min}
				max={max}
				step={step}
				hint={hint}
				title={`${title} ${value}`}
				onChange={handleChange}
				onInput={handleChange}
				size={size}
				rounded={`${rounded ? 'md' : 'none'}`}
				className={`${shapeClasses}`}
				style={scrubStyle}
			/>
		</Label>
	)
}

export default RangeInput
