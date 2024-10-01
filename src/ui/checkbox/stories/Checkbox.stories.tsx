import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '..'

const meta: Meta = {
	title: 'Fluid UI/Inputs/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Checkbox',
	args: {
		label: 'I accept',
		name: 'terms',
		hint: 'I agree to the terms and conditions',
		required: false,
		size: 'md',
		labelIsBold: true,
		rounded: 'none',
	},
}
