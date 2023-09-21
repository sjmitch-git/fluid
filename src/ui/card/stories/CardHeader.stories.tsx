import type { Meta, StoryObj } from '@storybook/react'
import { CardHeader } from '@/ui'

const meta: Meta = {
	title: 'UI/Card/Card Header',
	component: CardHeader,
	tags: ['autodocs'],
} satisfies Meta<typeof CardHeader>

export default meta
type Story = StoryObj<typeof meta>

export const CardTitle: Story = {
	args: {
		title: 'Card Title',
	},
}
