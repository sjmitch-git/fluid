import type { Meta, StoryObj } from '@storybook/react'
import { Codeblock } from '..'
import 'prismjs/themes/prism-tomorrow.min.css'

const meta: Meta = {
	title: 'Fluid UI/Misc/Codeblock',
	component: Codeblock,
	tags: ['autodocs'],
} satisfies Meta<typeof Codeblock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: `<Breadcrumbs size="sm" />`,
		language: 'jsx',
	},
}
