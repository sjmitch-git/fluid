import type { Meta, StoryObj } from '@storybook/react'
import TwitterEmbed from '../TwitterEmbed'

const meta: Meta = {
	title: 'Fluid UI/Media/Twitter Embed',
	component: TwitterEmbed,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **TwitterEmbed** component allows users to embed a single tweet or a user's timeline into their UI. It provides a variety of customization options such as language, theme (light or dark), height, and control over Twitter's UI elements such as headers, borders, transparency, and scrollbars.

### Key Features:
- Embed a single tweet, user timeline, or Twitter collection.
- Customizable appearance with support for light and dark themes.
- Dynamic control over height, headers, borders, transparency, and scrollbars.
- Support for multiple languages in the embed.

### Props:
- **handle**: The Twitter username whose tweet, timeline, or collection will be embedded.
- **status**: The ID of the tweet (for single tweet embeds).
- **theme**: 'light' or 'dark', controlling the visual theme of the embed.
- **header**: Toggles the visibility of the Twitter header.
- **borders**: Shows or hides borders around the embed.
- **transparent**: If true, the background will be transparent.
- **scrollbars**: Toggles scrollbars for embedded timelines when the content exceeds the height.

### Example Usage:
\`\`\`jsx
import { TwitterEmbed } from '@smitch/fluid';

<TwitterEmbed
  handle="storybookjs"
  header
  lang="en"
  status="1767571829365883097"
  theme="light"
/>
\`\`\`
				`,
			},
		},
	},
} satisfies Meta<typeof TwitterEmbed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Single Tweet',
	argTypes: {
		handle: {
			description: 'Twitter handle of the user whose tweet will be embedded.',
			control: { type: 'text' },
		},
		status: {
			description: 'The ID of the specific tweet to embed.',
			control: { type: 'text' },
		},
		lang: {
			description: 'Language code for the embed (e.g., en, es).',
			control: { type: 'text' },
		},
		theme: {
			description: 'Theme for the embed, either "light" or "dark".',
			control: { type: 'radio' },
			options: ['light', 'dark'],
		},
		header: {
			description: 'Whether to display the Twitter header in the embed.',
			control: { type: 'boolean' },
		},
		borders: {
			description: 'Whether to show borders around the embed.',
			control: { type: 'boolean' },
		},
		transparent: {
			description: 'Toggle transparency for the background.',
			control: { type: 'boolean' },
		},
		scrollbars: {
			description: 'Toggle scrollbars for long timelines.',
			control: { type: 'boolean' },
		},
		height: {
			description: 'Height of the embed in pixels.',
			control: { type: 'number' },
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
	parameters: {
		docs: {
			description: {
				story: 'Displays a single tweet from the given Twitter handle.',
			},
		},
	},
}

export const TwitterTimeline: Story = {
	argTypes: {
		...Default.argTypes,
		handle: {
			description: 'Twitter handle of the user whose timeline will be embedded.',
			control: { type: 'text' },
		},
		status: {
			table: { disable: true },
		},
	},
	args: {
		handle: 'elonmusk',
		lang: 'en',
		theme: 'dark',
		height: 480,
		borders: true,
		scrollbars: false,
		header: false,
		transparent: false,
	},
	parameters: {
		docs: {
			disable: true,
		},
	},
}
