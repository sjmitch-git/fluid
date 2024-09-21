import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '..'

const meta: Meta = {
	title: 'Fluid UI/Forms/Switch',
	component: Switch,
	tags: ['autodocs'],
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		checked: {
			table: {
				disable: true,
			},
		},
		defaultChecked: {
			table: {
				disable: true,
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	console.log('onChange event', { event })
}

export const Default: Story = {
	name: 'Switch',
	args: {
		shape: 'circle',
		switchColor: 'info',
		thin: false,
		label: 'Switch Label',
		labelSize: 'base',
		labelIsBold: false,
		hint: 'Some helpful info for the user',
		showHint: false,
		required: false,
		onChange: handleChange,
	},
}
