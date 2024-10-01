import type { Meta, StoryObj } from '@storybook/react'
import { SearchInput } from '..'

const meta: Meta = {
	title: 'Fluid UI/Inputs/Search Input',
	component: SearchInput,
	tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

const onButtonSubmit = (value: string) => {
	console.log('onButtonSubmit', value)
}

export const Default: Story = {
	argTypes: {
		value: {
			table: {
				disable: true,
			},
		},
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
		onButtonSubmit: {
			table: {
				disable: true,
			},
		},
		autocomplete: {
			options: ['on', 'off'],
		},
	},
	args: {
		onButtonSubmit: onButtonSubmit,
		label: 'Search',
		icon: true,
		size: 'md',
		inputStyles: 'border-neutral',
		btnShape: 'default',
		btnBackground: 'transparent',
		btnColor: 'current',
		autocomplete: 'on',
		placeholder: 'Search...',
		autocorrect: 'on',
		spellcheck: 'on',
		spacing: '0',
		rounded: 'none',
	},
}
