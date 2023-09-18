import type { Meta, StoryObj } from '@storybook/react'
import { CardBody } from '@/ui'

const meta: Meta = {
	title: 'UI/Card/Body',
	component: CardBody,
	tags: ['autodocs'],
} satisfies Meta<typeof CardBody>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultBody: Story = {
	args: {
		children: <p>Card body content</p>,
	},
}
