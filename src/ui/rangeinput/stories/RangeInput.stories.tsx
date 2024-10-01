import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RangeInput } from '..'
import { RangeInputProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Inputs/Range Input',
	component: RangeInput,
	argTypes: {
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
		required: {
			options: [false, true],
			control: { type: 'radio' },
		},
		onChange: {
			table: {
				disable: true,
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		rangeActive: {
			control: { type: 'color' },
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof RangeInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: RangeInputProps) => {
	const handleChange = (value: number) => {
		console.log('Range Input value: ', value)
	}

	return (
		<RangeInput
			{...args}
			onChange={handleChange}
		/>
	)
}

Default.args = {
	label: 'Range',
	labelIsBold: true,
	layout: 'col',
	size: 'md',
	min: 0,
	max: 100,
	step: '1',
	defaultValue: 50,
	rangeActive: '#ffa500',
	rangeBackground: '#ccc',
	thumbnailColor: '#ffa500',
	thumbnailShape: 'circle',
	rounded: true,
	title: 'Current value:',
	hint: true,
	required: false,
}
