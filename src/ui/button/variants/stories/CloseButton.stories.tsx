import type { Meta, StoryObj } from '@storybook/react'

import { CloseButton } from '..'

const meta: Meta = {
	title: 'Fluid UI/Button/Variants/Close Button',
	component: CloseButton,
	args: {
		layout: 'square',
		background: 'transparent',
		color: 'current',
		size: 'md',
		disabled: false,
		outline: false,
	},
	argTypes: {
		disabled: {
			options: [false, true],
			control: { type: 'radio' },
		},
		outline: {
			options: [false, true],
			control: { type: 'radio' },
		},
		role: {
			table: {
				disable: true,
			},
		},
		tabindex: {
			table: {
				disable: true,
			},
		},
		textcase: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		type: {
			table: {
				disable: true,
			},
		},
		title: {
			table: {
				disable: true,
			},
		},
		children: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
		onBlur: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CloseButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

Default.decorators = [
	(Story) => (
		<div
			style={{
				margin: '1rem',
				padding: '2rem',
				position: 'relative',
				background: '#ffffff',
			}}
		>
			<Story />
		</div>
	),
]
