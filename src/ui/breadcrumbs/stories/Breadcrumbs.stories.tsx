import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '..'

const meta: Meta = {
	title: 'Fluid UI/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/components/breadcrumbs',
			},
		},
	},
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		separator: {
			options: ['slash', 'arrow', 'pipe', 'dot'],
			control: { type: 'radio' },
		},
	},
	args: {
		size: 'md',
		homeLabel: 'Home',
		separator: 'slash',
	},
}

Default.decorators = [
	(Story) => (
		<div
			style={{
				padding: '.5rem',
				position: 'relative',
			}}
		>
			<Story />
		</div>
	),
]

export const RTL: Story = {
	args: {
		size: 'md',
		homeLabel: 'Home',
	},
}

RTL.decorators = [
	(Story) => (
		<div
			style={{
				padding: '.5rem',
				position: 'relative',
			}}
			dir='rtl'
		>
			<Story />
		</div>
	),
]
