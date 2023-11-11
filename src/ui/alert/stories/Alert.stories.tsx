import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '..'

const meta: Meta = {
	title: 'Fluid UI/Alert',
	component: Alert,
	argTypes: {
		dismissable: {
			options: [false, true],
			control: { type: 'radio' },
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const handleClick = () => {
	return false
}

export const Default: Story = {
	args: {
		status: 'info',
		title: 'info',
		layout: 'default',
		size: 'md',
		message:
			"<p>This is an <strong>important</strong> message for the user. It can be a simple string or <code>html</code> content. <br />Example of a <a href='#'>dummy link</a>.</p>",
		dismissable: false,
	},
}

export const NoTitle: Story = {
	argTypes: {
		title: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		title: null,
	},
}

export const Solid: Story = {
	args: {
		...Default.args,
		layout: 'solid',
	},
}

export const Outline: Story = {
	args: {
		...Default.args,
		layout: 'outline',
	},
}

export const Dismissable: Story = {
	args: {
		...Default.args,
		dismissable: true,
		onClick: handleClick,
	},
}
