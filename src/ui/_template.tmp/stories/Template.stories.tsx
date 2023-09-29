import type { Meta, StoryObj } from '@storybook/react'
import { Template, TemplateBody } from '..'

// import * as HeaderStories from './CardHeader.stories'

import Data from '@/data/dogs.json'
console.log('data', Data)
const meta: Meta = {
	title: 'template',
	component: Template,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Template>

export default meta
type Story = StoryObj<typeof meta>

const data = Data[0]

export const Default: Story = {
	args: {
		children: (
			<>
				<TemplateBody>Some body content</TemplateBody>
			</>
		),
	},
}

/* export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
} */
