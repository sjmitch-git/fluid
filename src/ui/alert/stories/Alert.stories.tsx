import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '..'

const meta: Meta = {
	title: 'Fluid UI/Feedback/Alert',
	component: Alert,
	parameters: {
		docs: {
			description: {
				component: `
The \`Alert\` component is used to display important messages to the user. It supports various statuses, layouts, and sizes, and can be made dismissable if needed. The message can be a simple string or HTML content to allow more complex formatting.

### Import
\`\`\`tsx
import { Alert } from '@smitch/fluid'
\`\`\`

### Props:

- **\`status\`** (string, required): Defines the alert's status, which typically controls the alert's color and icon. Available options:
  - \`'info'\`: For informational alerts (default).
  - \`'success'\`: For success messages.
  - \`'warning'\`: For warnings.
  - \`'error'\`: For errors and critical alerts.

- **\`title\`** (string | null, optional): The title of the alert. This is a short, bold heading that provides a quick summary of the alert's message. If not provided, the alert will not have a title. Defaults to \`'info'\`.

- **\`message\`** (string, required): The main content of the alert. This can be a simple string or HTML content. It supports rich text formatting, such as \`<strong>\`, \`<a>\`, \`<p>\`, and \`<code>\` tags.

- **\`layout\`** (\`'default'\` | \`'solid'\` | \`'outline'\`, optional): The visual style of the alert. Determines how the alert's background and borders are styled.
  - \`'default'\`: Standard alert with a light background.
  - \`'solid'\`: Solid background color for the alert, matching the \`status\`.
  - \`'outline'\`: Alert with no background, just a colored border.

- **\`size\`** (\`'sm'\` | \`'md'\` | \`'lg'\`, optional): Determines the size of the alert. Controls padding, font size, and spacing within the alert.
  - \`'sm'\`: Small-sized alert.
  - \`'md'\`: Medium-sized alert (default).
  - \`'lg'\`: Large-sized alert.

- **\`dismissable\`** (boolean, optional): If \`true\`, the alert will have a close button, allowing users to dismiss it. Defaults to \`false\`.

- **\`onClick\`** (function, optional): Callback function that will be triggered when the dismiss button is clicked. Only applicable if \`dismissable\` is \`true\`.

### Usage Example:

\`\`\`tsx
<Alert
  status="info"
  title="Info"
  message="<p>This is an <strong>important</strong> message for the user.</p>"
  layout="default"
  size="md"
/>
\`\`\`
`,
			},
		},
	},
	argTypes: {
		dismissable: {
			options: [false, true],
			control: { type: 'radio' },
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const handleClick = () => {
	return false
}

export const Default: Story = {
	args: {
		status: 'info',
		title: 'info',
		layout: 'default',
		size: 'md',
		message:
			"<p>This is an <strong>important</strong> message for the user. It can be a simple string or <code>html</code> content. <br />Example of a <a href='#'>dummy link</a>.</p>",
		dismissable: false,
	},
}

export const NoTitle: Story = {
	argTypes: {
		title: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		title: null,
	},
}

export const Solid: Story = {
	args: {
		...Default.args,
		layout: 'solid',
	},
}

export const Outline: Story = {
	args: {
		...Default.args,
		layout: 'outline',
	},
}

export const Dismissable: Story = {
	args: {
		...Default.args,
		dismissable: true,
		onClick: handleClick,
	},
}
