import type { Meta, StoryObj } from '@storybook/react'
import { Gallery } from '..'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Gallery',
	component: Gallery,
	tags: ['autodocs'],
} satisfies Meta<typeof Gallery>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: Data,
		aspect: 'landscape',
		caption: true,
	},
}
