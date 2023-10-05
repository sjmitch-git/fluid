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
		className: 'shadow-none hover:shadow-none absolute left-0 top-0 !p-0',
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
