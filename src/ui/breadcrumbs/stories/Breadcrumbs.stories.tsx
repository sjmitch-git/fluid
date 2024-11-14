import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs } from '..'

const meta: Meta = {
	title: 'Fluid UI/Menus/Breadcrumbs',
	component: Breadcrumbs,
	tags: ['autodocs'],
	parameters: {
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: '/components/breadcrumbs',
			},
		},
		docs: {
			description: {
				component: `
The **Breadcrumbs** component provides a navigational aid, allowing users to keep track of their locations within the application. It displays the path from the home page to the current page and allows for easy navigation back to previous pages.

### Key Features:
- **Customizable Separator:** Choose between 'slash', 'arrow', 'pipe', and 'dot' separators for visual distinction.
- **Size Options:** Supports small, medium, and large sizes to fit different design needs.
- **Home Label Customization:** Easily set the label for the home link.

### Import:
\`\`\`jsx
import { Breadcrumbs } from '@smitch/fluid-ui';
\`\`\`

### Example Usage:
\`\`\`jsx
<Breadcrumbs
	homeLabel="Home"
	separator="slash"
	size="md"
/>
\`\`\`

This example shows a Breadcrumbs component with a medium size, using a slash as the separator.
`,
			},
		},
	},
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		separator: {
			options: ['slash', 'arrow', 'pipe', 'dot'],
			control: { type: 'radio' },
		},
	},
	args: {
		size: 'md',
		homeLabel: 'Home',
		separator: 'slash',
	},
}

/* Default.decorators = [
	(Story) => (
		<div
			className='relative'
		>
			<Story />
		</div>
	),
] */

export const RTL: Story = {
	args: {
		size: 'md',
		homeLabel: 'Home',
	},
}

RTL.decorators = [
	(Story) => (
		<div dir='rtl'>
			<Story />
		</div>
	),
]
