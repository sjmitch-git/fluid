import type { Meta, StoryObj } from '@storybook/react'
import { Figure } from '..'

const meta: Meta = {
	title: 'Fluid UI/Figure',
	component: Figure,
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Figure>

export default meta
type Story = StoryObj<typeof meta>

const src =
	'https://st3.depositphotos.com/1752368/13759/i/450/depositphotos_137595842-stock-photo-three-budgies-are-in-the.jpg'
const title = 'Budgies'

export const Default: Story = {
	args: {
		src: src,
		alt: title,
		caption: title,
		aspect: 'landscape',
		backdrop: 'dark',
	},
}
