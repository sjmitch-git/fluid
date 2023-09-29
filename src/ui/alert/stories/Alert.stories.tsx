import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '..'

const meta: Meta = {
	title: 'Fluid UI/Alert',
	component: Alert,
	tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		status: 'info',
		layout: 'default',
		message:
			"<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian.</p>",
	},
}

/* export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
} */
