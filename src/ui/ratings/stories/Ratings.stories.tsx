import type { Meta, StoryObj } from '@storybook/react'
import { Ratings } from '..'

import { FaDiamond } from 'react-icons/fa6'

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
		size: 'md',
	},
}

export const CustomIcon: Story = {
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
		customIcon: {
			table: {
				disable: true,
			},
		},
		icon: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		customIcon: <FaDiamond />,
		background: 'transparent',
		color: 'accent',
		rating: 3,
		range: 5,
		spacing: '0',
		shape: 'square',
		size: 'md',
	},
}
