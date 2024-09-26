import type { Meta, StoryObj } from '@storybook/react'
import TwitterEmbed from '../TwitterEmbed'

const meta: Meta = {
	title: 'Fluid UI/Media/Twitter Embed',
	component: TwitterEmbed,
	tags: ['autodocs'],
} satisfies Meta<typeof TwitterEmbed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Single Tweet',
	argTypes: {
		handle: {
			table: {
				disable: true,
			},
		},
		status: {
			table: {
				disable: true,
			},
		},
		lang: {
			table: {
				disable: true,
			},
		},
		height: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		handle: 'storybookjs',
		status: '1767571829365883097',
		lang: 'en',
		theme: 'light',
		header: true,
		borders: false,
		transparent: false,
		scrollbars: false,
	},
}

export const TwitterTimeline: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		handle: 'elonmusk',
		borders: true,
		lang: 'en',
		theme: 'dark',
		height: 600,
	},
}
