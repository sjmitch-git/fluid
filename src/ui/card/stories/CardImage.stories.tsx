import type { Meta, StoryObj } from '@storybook/react'
import { CardImage } from '@/ui'

const meta: Meta = {
	title: 'Fluid UI/Card/Card Image',
	component: CardImage,
	args: {
		title: 'Akita',
		src: '/img/dogs/akita.jpg',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof CardImage>

export default meta
type Story = StoryObj<typeof meta>

export const AspectImage: Story = {
	args: {
		aspect: 'square',
	},
}
