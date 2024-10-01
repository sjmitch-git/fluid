import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete } from '..'

import data from '@/data/countries.json'

const meta: Meta = {
	title: 'Fluid UI/Inputs/Autocomplete',
	component: Autocomplete,
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		/* data: {
			table: {
				disable: true,
			},
		}, */
		list: {
			table: {
				disable: true,
			},
		},
		name: {
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
	args: {
		list: 'countries',
		placeholder: 'Select Country',
		size: 'md',
		required: false,
		label: 'Country',
		autocomplete: 'country-name',
		layout: 'row',
		rounded: 'md',
		data: data,
	},
}
