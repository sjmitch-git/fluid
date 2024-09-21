import type { Meta, StoryObj } from '@storybook/react'
import { Ratings } from '..'

const meta: Meta = {
	title: 'Fluid UI/Feedback/Ratings',
	component: Ratings,
	tags: ['autodocs'],
} satisfies Meta<typeof Ratings>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		icon: 'star',
		rating: 3,
		range: 5,
		spacing: '0',
		shape: 'square',
	},
}

/* export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
} */
