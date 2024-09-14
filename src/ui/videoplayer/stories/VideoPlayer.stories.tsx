import type { Meta, StoryObj } from '@storybook/react'
import VideoPlayer from '../VideoPlayer'

const videoSrc =
	'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const videoPoster = 'http://media.w3.org/2010/05/bunny/poster.png'

const meta: Meta = {
	title: 'Fluid UI/Media/Video Player',
	component: VideoPlayer,
	argTypes: {
		fallback: {
			table: {
				disable: true,
			},
		},
		formats: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof VideoPlayer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		src: videoSrc,
		controls: true,
		preload: 'none',
		loop: false,
		aspect: 'video',
		formats: ['mp4'],
	},
}

export const CustomControls: Story = {
	args: {
		...Default.args,
		poster: videoPoster,
		controls: false,
	},
}

export const WithError: Story = {
	args: {
		...Default.args,
		src: 'https://media.w3.org/2010/05/sintel/undefined.mp4',
		poster: undefined,
	},
}
