import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from '..'

const meta: Meta<typeof Loading> = {
	title: 'Fluid UI/Feedback/Loading',
	component: Loading,
	argTypes: {
		spinner: {
			options: ['bars', 'clock', 'dots', 'pulse', 'spindots', 'spinner', 'wifi'],
			control: { type: 'radio' },
		},
		layout: {
			options: ['col', 'col_reverse', 'row', 'row_reverse'],
			control: { type: 'radio' },
		},
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		spinner: 'spinner',
		caption: 'Loading',
		size: 'md',
		color: 'current',
		layout: 'col',
	},
}
