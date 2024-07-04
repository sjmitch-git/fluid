import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '..'
import { FaStar } from 'react-icons/fa6'

const meta: Meta = {
	title: 'Fluid UI/Badge',
	component: Badge,
	argTypes: {
		position: {
			options: ['inline', 'right'],
		},
		size: {
			options: ['sm', 'md', 'lg', 'xl'],
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
	args: {
		children: <FaStar />,
		position: 'inline',
		size: 'md',
	},
}

Default.decorators = [
	(Story) => (
		<div
			style={{
				position: 'relative',
			}}
			className='text-dark dark:text-light'
		>
			<h1
				style={{
					fontSize: '3rem',
				}}
			>
				Latest Post <Story />
			</h1>
		</div>
	),
]

export const WithIcon: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			options: ['square', 'circle', 'rounded'],
		},
	},
	args: {
		...Default.args,
		children: <FaStar />,
		layout: 'circle',
		background: 'warning',
		color: 'light',
	},
}

export const WithEmoji: Story = {
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

export const WithText: Story = {
	decorators: Default.decorators,
	argTypes: {
		layout: {
			options: ['rounded', 'pill'],
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

export const WithTextAndIcon: Story = {
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
