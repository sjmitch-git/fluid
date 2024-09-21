import type { Meta, StoryObj } from '@storybook/react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { Button } from '..'

const meta: Meta = {
	title: 'Fluid UI/Buttons/Button',
	component: Button,
	args: {
		layout: 'default',
		textcase: 'capitalize',
		isBold: false,
		background: 'primary',
		color: 'light',
		size: 'lg',
		outline: false,
		outlineColor: 'secondary',
		shadow: 'none',
		disabled: false,
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
		/* children: {
			table: {
				disable: true,
			},
		}, */
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Text Label',
	args: {
		children: 'Click!',
	},
}

export const Icon: Story = {
	argTypes: {
		textcase: {
			table: {
				disable: true,
			},
		},
		isBold: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: (
			<>
				<FaPlus />
				<span className='sr-only'>Add Item</span>
			</>
		),
		layout: 'circle',
	},
}

export const IconAndTextLabel: Story = {
	args: {
		children: (
			<>
				<FaPlus />
				Add Item
			</>
		),
		layout: 'pill',
	},
}

export const DeleteButton: Story = {
	args: {
		children: (
			<>
				<FaTrashAlt />
				<span className='sr-only'>Delete Item</span>
			</>
		),
		layout: 'circle',
		background: 'light',
		color: 'danger',
		outline: true,
		title: 'Delete Item?',
	},
}
