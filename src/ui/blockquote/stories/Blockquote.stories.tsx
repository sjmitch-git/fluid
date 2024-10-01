import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote } from '..'

const meta: Meta = {
	title: 'Fluid UI/Typography/Blockquote',
	component: Blockquote,
	tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		text: 'Nothing compares to the simple pleasure of riding a bike.',
		author: 'John F. Kennedy',
		cite: 'https://www.famousquotes.com/quote-author/john-fitzgerald-kennedy/',
        footerAlign: 'right',
        size: 'md'
	},
}