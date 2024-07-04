import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '..'

import Data from '@/data/dogs.json'
const data = Data[0]
const meta: Meta = {
	title: 'Fluid UI/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		onClick: {
			table: {
				disable: true,
			},
		},
		className: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const setOpen = (open: boolean) => {
	open = open
}

export const Default: Story = {
	argTypes: {
		alt: {
			table: {
				disable: true,
			},
		},
		open: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		src: data.src,
		caption: data.name,
		alt: data.name,
		open: true,
		theme: 'dark',
		onClick: setOpen(false),
	},
}
