import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '..'

const meta: Meta = {
	title: 'Fluid UI/Input',
	component: Input,
	/* argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	}, */
	tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		type: 'text',
	},
}

/* export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
} */
