import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '..'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Accordion',
	component: Accordion,
	tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: Data,
		icon: 'symbol',
		layout: 'flush',
		opened: '1',
		size: 'md',
		theme: 'light',
	},
}
