import type { Meta, StoryObj } from '@storybook/react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { Button } from '..'

const meta: Meta = {
	title: 'Fluid UI/Button',
	component: Button,
	argTypes: {
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
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: <>Click!</>,
	},
}

export const Icon: Story = {
	args: {
		children: (
			<>
				<PlusIcon className='aspect-square text-current w-8 group-[.text-sm]:w-6 group-[.text-lg]:w-10' />
				<span className='sr-only'>Add Item</span>
			</>
		),
		layout: 'circle',
		theme: 'info',
	},
}

export const IconAndLabel: Story = {
	args: {
		children: (
			<>
				<PlusIcon className='aspect-square text-current w-8 group-[.text-sm]:w-6 group-[.text-lg]:w-10' />
				Add Item
			</>
		),
		layout: 'pill',
		theme: 'info',
	},
}
