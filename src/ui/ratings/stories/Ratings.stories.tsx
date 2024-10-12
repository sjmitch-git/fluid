import type { Meta, StoryObj } from '@storybook/react'
import { Ratings } from '..'

import { FaDiamond } from 'react-icons/fa6'

const codeExample = `
<Ratings
  rating={3}
  range={5}
  icon="star"
  size="md"
  background="transparent"
  color="accent"
/>
`

const customIconExample = `
import { FaDiamond } from 'react-icons/fa6'

<Ratings
  rating={3}
  range={5}
  customIcon={<FaDiamond />}
  size="md"
  background="transparent"
  color="accent"
/>
`

const emojiIconExample = `
<Ratings
  rating={4}
  range={5}
  customIcon="🙂"
  size="md"
  background="transparent"
/>
`

const meta: Meta = {
	title: 'Fluid UI/Feedback/Ratings',
	component: Ratings,
	tags: ['autodocs'],
	parameters: {
		docs: {
			source: {
				code: codeExample,
			},
			description: {
				component: `
The **Ratings** component allows users to display a set of icons (such as stars) to indicate a rating level (e.g., 3 out of 5 stars).

### Import
\`\`\`tsx
import { Ratings } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// default icon (star)
${codeExample}
\`\`\`

\`\`\`tsx
// custom icon
${customIconExample}
\`\`\`

\`\`\`tsx
// using an emoji as the custom icon
${emojiIconExample}
\`\`\`

### Key Features:
- Customizable with different icons such as \`star\`, \`heart\`, \`thumb\`, and more.
- You can pass a custom icon using the \`customIcon\` prop.
- The component allows setting the total range of icons (e.g., 5 for a 5-star rating system) via the \`range\` prop.
- Easily change the appearance using props like \`size\`, \`color\`, and \`background\`.

### Props:
- \`rating\` (number): The current rating value. Determines how many icons will be filled in.
- \`range\` (number, optional): The total number of icons displayed (e.g., 5 for 5 stars). Defaults to \`5\`.
- \`icon\` ('star' | 'smiley' | 'thumb' | 'heart' | 'check' | 'thumbdown' | 'frown'): Specifies the icon to use for the rating.
- \`customIcon\` (React.ReactNode, optional): Allows you to pass a custom icon for the rating, overriding the default icons.
- \`size\` ('sm' | 'md' | 'lg' | 'inherit', optional): Sets the size of the rating icons.
- \`color\` (string, optional): Specifies the color for the filled icons.
- \`background\` (string, optional): Specifies the background color of the icons.
- \`spacing\` ('0' | '1' | '2', optional): Controls the spacing between the icons.
- \`shape\` ('square' | 'circle' | 'rounded', optional): Defines the shape of each icon's background (e.g., circle for a rounded appearance).
        `,
			},
		},
	},
} satisfies Meta<typeof Ratings>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		icon: {
			options: ['star', 'smiley', 'thumb', 'heart', 'check', 'thumbdown', 'frown'],
			control: { type: 'select' },
			description: 'Selects the default icon for the rating. Defaults to "star".',
		},
		customIcon: {
			description: 'Allows a custom icon to be passed instead of using the default icons.',
			control: { type: 'null' }, // Disables control in the default story
		},
		rating: {
			control: { type: 'number', min: 1, max: 5 },
			description: 'Sets the current rating (e.g., 3 out of 5).',
		},
		range: {
			control: { type: 'number', min: 1, max: 10 },
			description: 'Defines the total number of rating options (e.g., 5 stars).',
		},
		shape: {
			options: ['square', 'circle', 'rounded'],
			control: { type: 'select' },
			description: 'Defines the shape of the badge background (square, circle, rounded).',
		},
		size: {
			options: ['sm', 'md', 'lg', 'inherit'],
			control: { type: 'select' },
			description: 'Defines the size of the rating badges (small, medium, large).',
		},
		background: {
			control: { type: 'color' },
			description: 'Sets the background color of the badge.',
		},
		color: {
			control: { type: 'color' },
			description: 'Sets the color of the badge text or icon when the rating is active.',
		},
		spacing: {
			control: { type: 'select', options: ['0', '1', '2'] },
			description: 'Defines the spacing between rating badges.',
		},
	},
	args: {
		icon: 'star',
		rating: 3,
		range: 5,
		spacing: '0',
		shape: 'square',
		size: 'md',
		background: 'transparent',
		color: 'accent',
	},
}

export const CustomIcon: Story = {
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
		customIcon: {
			table: {
				disable: true,
			},
		},
		icon: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		customIcon: <FaDiamond />,
		background: 'transparent',
		color: 'accent',
		rating: 3,
		range: 5,
		spacing: '0',
		shape: 'square',
		size: 'md',
	},
	parameters: {
		docs: {
			description: {
				story: 'This story demonstrates a custom icon (`FaDiamond`) used for the Ratings component.',
			},
		},
	},
}

export const EmojiCustomIcon: Story = {
	args: {
		...CustomIcon.args,
		customIcon: '🙂',
		background: 'transparent',
		color: 'accent',
	},
	argTypes: {
		customIcon: {
			table: {
				disable: false,
			},
			color: {
				table: {
					disable: false,
				},
			},
		},
	},
	parameters: {
		docs: {
			source: {
				code: emojiIconExample,
			},
			description: {
				story: 'This story demonstrates a custom emoji icon 🙂 used for the Ratings component. The rating is set to 4 out of 5.',
			},
		},
	},
}
