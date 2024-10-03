import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '..'
import { Heading } from '@/ui'
import { FaStar } from 'react-icons/fa6'

const meta: Meta = {
	title: 'Fluid UI/Feedback/Badge',
	component: Badge,
	argTypes: {
		position: {
			options: ['inline', 'right'],
		},
		size: {
			options: ['sm', 'md', 'lg'],
		},
		children: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Icon',
	args: {
		children: <FaStar />,
		position: 'inline',
		size: 'sm',
		layout: 'circle',
		background: 'info',
		color: 'light',
	},
}

Default.decorators = [
	(Story) => (
		<div
			style={{
				position: 'relative',
			}}
			className='text-dark dark:text-light dark:bg-dark'
		>
			<Heading level={3}>
				Latest Post <Story />
			</Heading>
		</div>
	),
]

export const Emoji: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
		color: {
			table: {
				disable: true,
			},
		},
		background: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		position: 'inline',
		children: '🙂',
		layout: 'circle',
		background: 'transparent',
	},
}

export const Text: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			options: ['rounded', 'pill'],
		},
		children: {
			table: {
				disable: false,
			},
		},
	},
	args: {
		...Default.args,
		children: 'New',
		layout: 'rounded',
		background: 'info',
		color: 'light',
	},
}

export const TextAndIcon: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			options: ['rounded', 'pill'],
		},
	},
	args: {
		...Default.args,
		children: (
			<>
				<FaStar />
				New
			</>
		),
		layout: 'rounded',
		background: 'info',
		color: 'light',
	},
}

export const Empty: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			options: ['square', 'circle'],
		},
		position: {
			options: ['inline', 'left', 'right'],
		},
		color: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		position: 'right',
		children: '',
		layout: 'circle',
		background: 'warning',
	},
}
