import type { Meta, StoryObj } from '@storybook/react'
import { Loading } from '..'
import { FaCircleArrowDown } from 'react-icons/fa6'

const meta: Meta<typeof Loading> = {
	title: 'Fluid UI/Feedback/Loading',
	component: Loading,
	argTypes: {
		spinner: {
			options: ['bars', 'clock', 'dots', 'pulse', 'spindots', 'spinner', 'wifi'],
			control: { type: 'radio' },
		},
		layout: {
			options: ['col', 'col_reverse', 'row', 'row_reverse'],
			control: { type: 'radio' },
		},
	},
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **Loading** component indicates background processes using various spinner animations and customizable layouts.

### Key Features:
- Multiple spinner types, layouts, and color schemes.
- Customizable spinners (React components or emojis).
- Animation controls to customize spinner behavior (spin, bounce, pulse, etc.).

### Import
\`\`\`tsx
import { Loading } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
<Loading
  spinner="spinner"
  caption="Loading"
  size="md"
  color="warning"
  layout="col"
/>
\`\`\`

### Props:

- \`spinner\` (string, optional): The spinner animation type. Options:
  - \`'bars'\`, \`'clock'\`, \`'dots'\`, \`'pulse'\`, \`'spindots'\`, \`'spinner'\`, \`'wifi'\`.
  - **Default**: \`'spinner'\`.

- \`customSpinner\` (React.ReactNode, optional): A custom spinner that can be either a React component (e.g., \`<FaStar />\`) or an emoji (e.g., \`'🌍'\`). If provided, it will override the default spinner.

- \`customAnimate\` ('spin' | 'bounce' | 'pulse' | 'ping', optional): The animation to apply to the spinner. Options:
  - \`'spin'\`, \`'bounce'\`, \`'pulse'\`, \`'ping'\`.
  - **Default**: \`'spin'\`.

- \`caption\` (string, optional): Text displayed below or beside the spinner, depending on the \`layout\`.

- \`size\` ('sm' | 'md' | 'lg' | 'xl', optional): The size of the spinner. This adjusts the spinner and caption size.
  - **Default**: \`'md'\`.

- \`color\` ('dark' | 'light' | 'info' | 'success' | 'warning' | 'danger' | 'primary' | 'secondary' | 'current', optional): The color of the spinner and caption. Useful for matching UI themes.
  - **Default**: \`'current'\`.

- \`layout\` ('col' | 'col_reverse' | 'row' | 'row_reverse', optional): The layout that determines the orientation of the spinner and caption.
  - \`'col'\`: The spinner is stacked above the caption (default).
  - \`'col_reverse'\`: The caption is stacked above the spinner.
  - \`'row'\`: The spinner is displayed to the left of the caption.
  - \`'row_reverse'\`: The caption is displayed to the left of the spinner.
  - **Default**: \`'col'\`.

- \`className\` (string, optional): Additional CSS classes to customize the appearance.`,
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Default Icons',
	args: {
		spinner: 'spinner',
		caption: 'Loading',
		size: 'md',
		color: 'warning',
		layout: 'col',
	},
	argTypes: {
		customSpinner: {
			table: {
				disable: true,
			},
		},
		customAnimate: {
			table: {
				disable: true,
			},
		},
	},
}

Default.decorators = [
	(Story) => (
		<div className='bg-light dark:bg-transparent dark:text-light py-8'>
			<Story />
		</div>
	),
]

export const CustomIcons: Story = {
	decorators: Default.decorators,
	argTypes: {
		spinner: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		customSpinner: <FaCircleArrowDown />,
		customAnimate: 'bounce',
		caption: 'Downloading',
		size: 'lg',
		color: 'warning',
		layout: 'col',
	},
}

export const CustomEmoji: Story = {
	decorators: Default.decorators,
	argTypes: {
		...CustomIcons.argTypes,
	},
	args: {
		customSpinner: '☎️',
		customAnimate: 'pulse',
		caption: 'Incoming Call',
		size: 'lg',
		color: 'warning',
		layout: 'col',
	},
}
