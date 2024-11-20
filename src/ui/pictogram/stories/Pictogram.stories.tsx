import type { Meta, StoryObj } from '@storybook/react'
import { Pictogram } from '..'

const meta: Meta<typeof Pictogram> = {
	title: 'Fluid UI/Data Visualization/Pictogram',
	component: Pictogram,
	parameters: {
		docs: {
			description: {
				component: `
The **Pictogram** component is used to visually represent data using rows of icons.
Each row corresponds to a label, and the number of icons displayed in each row is determined by the \`tally\` prop.
You can customize the icons, labels, and styles to suit your design needs.

### Import
\`\`\`tsx
import { Pictogram } from '@smitch/fluid'
\`\`\`

### Example Usage
\`\`\`tsx
<Pictogram
  labels={['Mon', 'Tue', 'Wed']}
  tally={[3, 2, 5]}
  icon="🍔"
  className="custom-class"
/>
\`\`\`
        `,
			},
		},
	},
	argTypes: {
		labels: {
			control: 'array',
			description: 'Labels for each row of the pictogram.',
		},
		tally: {
			control: 'array',
			description: 'Array of numbers representing how many icons to display for each label.',
		},
		icon: {
			control: 'text',
			description: 'The icon to be used in the pictogram (e.g., emoji or SVG).',
		},
		className: {
			control: 'text',
			description: 'Optional additional CSS classes.',
		},
		style: {
			control: 'object',
			description: 'Inline styles for the table.',
		},
	},
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		caption: 'Burgers Consumed',
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
		tally: [3, 2, 2, 1, 3],
		icon: '🍔',
		captionSide: 'top',
		className: 'border border-gray-300',
	},
}
