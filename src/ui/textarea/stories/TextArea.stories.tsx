import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '..'

const meta: Meta = {
	title: 'Fluid UI/Forms/Textarea',
	component: TextArea,
	tags: ['autodocs'],
	argTypes: {
		onChange: {
			table: {
				disable: true,
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: 'Some placeholder text',
		resize: true,
		maxLength: 200,
		rows: 4,
		label: 'Comments',
		required: false,
		layout: 'col',
	},
}
