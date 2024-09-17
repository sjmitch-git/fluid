import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from '..'

const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'

const meta: Meta = {
	title: 'Fluid UI/Forms/PasswordInput',
	component: PasswordInput,
	tags: ['autodocs'],
	argTypes: {
		onChange: {
			table: {
				disable: true,
			},
		},
		onInputChange: {
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
} satisfies Meta<typeof PasswordInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Password',
		layout: 'col',
		size: 'md',
		autocomplete: 'current-password',
		placeholder: 'Enter your password',
		hint: true,
		pattern: passwordPattern,
		title: 'Password must be 8-12 characters long, include at least one digit, one uppercase letter, and one symbol.',
		required: true,
		rounded: 'md',
	},
}
