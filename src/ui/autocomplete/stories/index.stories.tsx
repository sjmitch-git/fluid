import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete } from '..'

import data from '@/data/countries.json'

const meta: Meta = {
	title: 'Fluid UI/Autocomplete',
	component: Autocomplete,
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		data: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		data: data,
		list: 'countries',
		placeholder: 'Select Country',
	},
}

/* export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
} */
