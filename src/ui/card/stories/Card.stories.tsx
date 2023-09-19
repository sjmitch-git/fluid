import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardImage } from '@/ui'

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
				<CardImage
					title='Akita'
					src='../public/img/dogs/akita.jpg'
				/>
				<CardBody>
					<p>Card body content</p>
				</CardBody>
			</>
		),
	},
}

export const LightTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
}

export const DarkTheme: Story = {
	args: {
		...Default.args,
		theme: 'dark',
	},
}
