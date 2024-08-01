import type { Meta, StoryObj } from '@storybook/react'
import VideoPlayer from '../VideoPlayer'

const videoSrc =
	'http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4'

const trailerSrc = 'https://media.w3.org/2010/05/sintel/trailer.mp4'
const trailerPoster = 'https://media.w3.org/2010/05/sintel/poster.png'

const bunnySrc =
	'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const bunnyPoster = 'http://media.w3.org/2010/05/bunny/poster.png'

const meta: Meta = {
	title: 'Fluid UI/Video Player',
	component: VideoPlayer,
	argTypes: {
		fallback: {
			table: {
				disable: true,
			},
		},
		currentTime: {
			table: {
				disable: true,
			},
		},
		formats: {
			table: {
				disable: true,
			},
		},
		pictureInPicture: {
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
		src: bunnySrc,
		poster: bunnyPoster,
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
		controls: false,
	},
}

export const WithError: Story = {
	args: {
		...Default.args,
		src: 'https://media.w3.org/2010/05/sintel/trailer.mp',
		poster: 'https://media.w3.org/2010/05/sintel/poster.p',
	},
}
