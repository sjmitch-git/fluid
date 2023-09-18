import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody } from '@/ui'

const meta: Meta = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<>
				<CardHeader title='Card Title' />
				<CardBody>
					<p>Card body content</p>
				</CardBody>
			</>
		),
	},
}

export const LightTheme: Story = {
	...Default.args,
	args: {
		theme: 'light',
	},
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
