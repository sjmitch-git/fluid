import { Meta, StoryObj } from '@storybook/react'
import YoutubeEmbed from '../YoutubeEmbed'

const meta: Meta = {
	title: 'Fluid UI/Media/YouTube Embed',
	component: YoutubeEmbed,
	parameters: {
		docs: {
			description: {
				component:
					'YouTube Embed component is used to easily embed YouTube videos in your application. It provides various options for controlling playback behaviour, player appearance, etc',
			},
		},
	},
	argTypes: {
		videoId: {
			control: 'text',
			description: 'The ID of the YouTube video to embed.',
		},
		playerParams: {
			description: 'Additional parameters for the YouTube player.',
			control: 'object',
			defaultValue: {},
		},
		loading: {
			control: 'select',
			options: ['eager', 'lazy'],
			description: 'Loading behavior for the iframe.',
		},
		referrerPolicy: {
			control: 'select',
			options: ['no-referrer', 'origin', 'unsafe-url'],
			description: 'Referrer policy for the iframe.',
		},
		allow: {
			control: 'text',
			description: 'Specifies permissions for the iframe.',
			defaultValue:
				'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof YoutubeEmbed>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		videoId: 'Q4cAzEvMsHE',
		title: 'YouTube video player',
		playerParams: {
			controls: 1,
			autoplay: 0,
			mute: 0,
			loop: 0,
		},
		allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
		loading: 'lazy',
		referrerPolicy: 'no-referrer',
	},
}

export const Autoplay: Story = {
	args: {
		...Default.args,
		playerParams: {
			controls: 1,
			autoplay: 1,
		},
		loading: 'eager',
	},
}

export const NoControls: Story = {
	args: {
		...Default.args,
		playerParams: {
			controls: 0,
		},
	},
}
