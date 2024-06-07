import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '..'
import AccordionWrapper from '../wrappers/Accordian'
import { AccordionProps } from '../types'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Accordion',
	component: Accordion,
	tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: Data,
		icon: 'symbol',
		layout: 'flush',
		opened: '1',
		size: 'md',
		theme: 'light',
	},
}

Default.argTypes = {
	opened: {
		table: {
			disable: true,
		},
	},
}

export const Custom: Story = (args: AccordionProps) => <AccordionWrapper {...args} />

Custom.args = {
	icon: 'symbol',
	theme: 'light',
	layout: 'flush',
}

Custom.argTypes = {
	data: {
		table: {
			disable: true,
		},
	},
	size: {
		table: {
			disable: true,
		},
	},
	className: {
		table: {
			disable: true,
		},
	},
	opened: {
		table: {
			disable: true,
		},
	},
}
