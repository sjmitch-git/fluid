import type { Meta, StoryObj } from '@storybook/react'
import { Video } from '..'

const videoSrc =
	'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
const videoPoster = 'http://media.w3.org/2010/05/bunny/poster.png'

const meta: Meta = {
	title: 'Fluid UI/Media/Video',
	component: Video,
	argTypes: {
		aspect: {
			description: 'The aspect ratio for the video.',
			control: 'select',
			options: ['video', 'square', 'television', 'cinema', 'phone', 'ultrawide'],
		},
		defaultError: {
			description: 'Default error message when the video cannot be loaded.',
			control: 'text',
		},
		preload: {
			description:
				'Specifies how the video should load. Options are "auto", "metadata", and "none".',
			control: 'select',
			options: ['auto', 'metadata', 'none'],
		},
		src: {
			description: 'The source URL of the video.',
			control: 'text',
		},
		poster: {
			description: 'URL for the image that appears before the video starts playing.',
			control: 'text',
		},
		loop: {
			description: 'Boolean that sets whether the video should loop when it finishes.',
			control: 'boolean',
		},
		muted: {
			table: {
				disable: true,
			},
		},
		autoplay: {
			table: {
				disable: true,
			},
		},
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
		setDuration: {
			table: {
				disable: true,
			},
		},
		setTime: {
			table: {
				disable: true,
			},
		},
		currentTime: {
			table: {
				disable: true,
			},
		},
		volume: {
			table: {
				disable: true,
			},
		},
		play: {
			table: {
				disable: true,
			},
		},
		togglePlay: {
			table: {
				disable: true,
			},
		},
		playEnded: {
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
	parameters: {
		docs: {
			description: {
				component: `
The **Video** component allows embedding and customizing videos in your UI. It supports various video sources, aspect ratios, and playback options. You can also add error messages, preloading strategies, and loop control.

### Key Features:
- Customizable aspect ratio.
- Error message display when the video source fails to load.
- Support for video formats such as MP4, WebM, and OGG.
- Options to preload video metadata or entire content.
- Looping and custom poster image support.
- Control visibility of play, volume, and fullscreen options.

### Example Usage:
\`\`\`jsx
import Video from '@smitch/fluid';

<Video
  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  poster="http://media.w3.org/2010/05/bunny/poster.png"
  preload="metadata"
  loop={false}
  aspect="video"
  defaultError="Video failed to load."
/>
\`\`\`
        `,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Video>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		src: videoSrc,
		poster: videoPoster,
		preload: 'none',
		loop: false,
		aspect: 'video',
		muted: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'This is the default video player with standard controls and video format support.',
			},
		},
	},
}

export const WithError: Story = {
	args: {
		src: 'https://media.w3.org/2010/05/sintel/undefined.mp4',
		poster: undefined,
		muted: false,
		autoplay: true,
		defaultError: 'Error: Video cannot be loaded.',
	},
	parameters: {
		docs: {
			disable: true,
		},
	},
}

export const Subtitles: Story = {
	argTypes: {
		defaultError: {
			table: {
				disable: true,
			},
		},
		aspect: {
			table: {
				disable: true,
			},
		},
		muted: {
			table: {
				disable: true,
			},
		},
		autoplay: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		src: './example.mp4',
		tracks: ['./subs.vtt', './subs_fr.vtt', './subs_ja.vtt'],
		srcLangs: ['en', 'fr', 'ja'],
	},
	parameters: {
		docs: {
			disable: true,
		},
	},
}
