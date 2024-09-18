import type { Meta, StoryObj } from '@storybook/react'
import { Counter } from '..'

const meta: Meta = {
	title: 'Fluid UI/Forms/Counter',
	component: Counter,
	tags: ['autodocs'],
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

const onCountChange = (count: number) => {
	console.log('onCountChange', count)
}

export const Default: Story = {
	name: 'Counter',
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		onCountChange: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		min: 1,
		max: 9,
		value: 1,
		step: 1,
		btnShape: 'square',
		btnBackground: 'transparent',
		btnColor: 'current',
		spacing: '0',
		onCountChange: onCountChange,
		label: 'Amount',
		layout: 'col',
		id: 'pax',
		size: 'md',
		title: 'Enter a value between 1 and 9',
		hint: true,
		className: 'font-semibold',
		inputStyles: 'max-w-[3em] border-neutral border-2',
	},
}
