import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody } from '@/ui'
import { DefaultHeader } from '@/ui/card/stories/CardHeader.stories'
import { DefaultBody } from '@/ui/card/stories/CardBody.stories'

const meta: Meta = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Card {...args}>
			<CardHeader {...DefaultHeader.args} />
			<CardBody {...DefaultBody.args} />
		</Card>
	),
}

/* const meta: Meta = {
	title: 'Components/Card',
	component: Card,
	tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const LightTheme: Story = {
	args: {
		theme: 'light',
		children: Title,
	},
}

export const DarkTheme: Story = {
	args: {
		theme: 'dark',
	},
} */
