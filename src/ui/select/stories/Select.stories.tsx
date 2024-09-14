import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '..'

const options = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

const stringOptions = ['01', '02', '03', '04', '05']

const numberOptions = [1, 2, 3, 4, 5]

const months = [
	{ value: '01', label: 'January' },
	{ value: '02', label: 'February' },
	{ value: '03', label: 'March' },
	{ value: '04', label: 'April' },
	{ value: '05', label: 'May' },
	{ value: '06', label: 'June' },
	{ value: '07', label: 'July' },
	{ value: '08', label: 'August' },
	{ value: '09', label: 'September' },
	{ value: '10', label: 'October' },
	{ value: '11', label: 'November' },
	{ value: '12', label: 'December' },
]

const meta: Meta = {
	title: 'Fluid UI/Forms/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
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
	},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Object: Story = {
	args: {
		placeholder: 'Select Month',
		options: months,
		name: 'months',
		dropdownSize: 'base',
		className: 'border-neutral',
		required: true,
		rounded: 'md',
		nocaret: false,
	},
}

export const Numbers: Story = {
	args: {
		options: numberOptions,
		name: 'numbers',
		dropdownSize: 'base',
		className: 'border-neutral',
		required: true,
		defaultValue: 1,
		rounded: 'md',
		nocaret: true,
	},
}
