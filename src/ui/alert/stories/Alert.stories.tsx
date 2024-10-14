import type { Meta, StoryObj } from '@storybook/react'

import { Alert } from '..'

import { FaExclamation } from 'react-icons/fa6'

const defaultCode = `<Alert
  status="info"
  title="Alert Title"
  message="<p>This is an <strong>important</strong> message for the user.</p>"
  layout="default"
/>`

const meta: Meta = {
	title: 'Fluid UI/Feedback/Alert',
	component: Alert,
	parameters: {
		docs: {
			description: {
				component: `
The \`Alert\` component is used to display important messages to the user. It supports various statuses and layouts, and can be made dismissable if needed. The message can be a simple string or HTML content to allow more complex formatting.

### Key Features:
- **Status Variants**: Displays alerts with different statuses such as \`'info'\`, \`'success'\`, \`'warning'\`, or \`'error'\`, controlling the color and icon based on the alert's purpose.
- **Customizable Title**: Optional \`title\` prop allows for a bold heading to summarize the alert's message. Can be omitted for a title-less alert.
- **Rich Message Content**: Supports both plain text and HTML for the \`message\` prop, enabling rich text formatting, including tags like \`<strong>\`, \`<a>\`, \`<p>\`, and \`<code>\` tags.
- **Layout Options**: Configurable \`layout\` with options like \`'default'\` (light background), \`'solid'\` (solid color background), or \`'outline'\` (border only, no background).
- **Dismissable**: Optional \`dismissable\` prop adds a close button to the alert, allowing users to dismiss it. Includes a callback via the \`onClick\` prop.
- **Badge**: A badge can be added next to the title to highlight the alert. Supports icons or text with customizable background and text colors.


### Import
\`\`\`tsx
import { Alert } from '@smitch/fluid'
\`\`\`

### Usage Example:

\`\`\`tsx
${defaultCode}
\`\`\`

### Props:

- \`status\` (string, required): Defines the alert's status, which typically controls the alert's color and icon. Available options:
  - \`'info'\`: For informational alerts (default).
  - \`'success'\`: For success messages.
  - \`'warning'\`: For warnings.
  - \`'error'\`: For errors and critical alerts.

- \`title\` (string | null, optional): The title of the alert. This is a short, bold heading that provides a quick summary of the alert's message. If not provided, the alert will not have a title.

- \`message\` (string, required): The main content of the alert. This can be a simple string or HTML content. It supports rich text formatting, such as \`<strong>\`, \`<a>\`, \`<p>\`, and \`<code>\` tags.

- \`layout\` (\`'default'\` | \`'solid'\` | \`'outline'\`, optional): The visual style of the alert. Determines how the alert's background and borders are styled.
  - \`'default'\`: Standard alert with a light background.
  - \`'solid'\`: Solid background color for the alert, matching the \`status\`.
  - \`'outline'\`: Alert with no background, just a colored border.

- \`dismissable\` (boolean, optional): If \`true\`, the alert will have a close button, allowing users to dismiss it. Defaults to \`false\`.

- \`onClick\` (function, optional): Callback function that will be triggered when the dismiss button is clicked. Only applicable if \`dismissable\` is \`true\`.

- \`badge\` (React.ReactNode, optional): A badge (icon or text) that will appear next to the alert title. Useful for adding emphasis to the alert.

- \`badgeBackground\` (\`'dark'\` | \`'light'\` | \`'info'\` | \`'success'\` | \`'warning'\` | \`'danger'\` | \`'transparent'\`, optional): The background color of the badge.

- \`badgeColor\` (\`'dark'\` | \`'light'\` | \`'info'\` | \`'success'\` | \`'warning'\` | \`'danger'\`, optional): The text or icon color of the badge.

al): Callback function that will be triggered when the dismiss button is clicked. Only applicable if \`dismissable\` is \`true\`.
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
	argTypes: {
		badge: {
			table: {
				disable: true,
			},
		},
		badgeColor: {
			table: {
				disable: true,
			},
		},
		badgeBackground: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		status: 'info',
		title: 'Alert Title',
		layout: 'default',
		message:
			"<p>This is an <strong>important</strong> message for the user. It can be a simple string or <code>html</code> content. <br />Example of a <a href='#'>dummy link</a>.</p>",
		dismissable: false,
	},
}

export const NoTitle: Story = {
	argTypes: {
		...Default.argTypes,
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
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		layout: 'solid',
	},
}

export const Outline: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		layout: 'outline',
	},
}

export const Dismissable: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		dismissable: true,
		onClick: handleClick,
	},
}

export const Badge: Story = {
	args: {
		...Default.args,
		badge: <FaExclamation />,
		badgeBackground: 'dark',
		badgeColor: 'light',
	},
}
