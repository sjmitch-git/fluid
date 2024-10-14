import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '..'
import { ToastProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Feedback/Toast',
	component: Toast,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **Toast** component provides feedback messages that are typically used for temporary notifications. These notifications appear in different parts of the UI, disappear after a set time, or can be manually closed.

### Key Features:
- **Configurable Position**: Position the toast anywhere on the screen (top, bottom, center).
- **Auto-hide Support**: Automatically close after a set duration, or keep it persistent until manually closed.
- **Customizable Appearance**: Supports different background colors, text colors, and rounded corners.
- **Closable**: Optional close button for manual dismissal.

### Import:
\`\`\`tsx
import { Toast } from '@smitch/fluid'
\`\`\`

### Usage Example:
\`\`\`tsx
const [open, setOpen] = useState(false);

return (
  <>
    <button onClick={() => setOpen(true)}>Open Toast</button>
    <Toast
      open={open}
      body="Notification message goes here"
      onClose={() => setOpen(false)}
      background="info"
      autohide={true}
      autohideDuration={3000}
      horizontal="center"
      vertical="top"
    />
  </>
)
\`\`\`

### Props:

- \`open\` (boolean, required): Controls whether the toast is open or closed.

- \`body\` (React.ReactNode, required): The content displayed inside the toast.

- \`onClose\` (function, required): Function called when the toast is closed either by auto-hide or manual interaction.

- \`autohide\` (boolean, optional): If true, the toast will automatically close after the \`autohideDuration\`. Defaults to \`true\`.

- \`autohideDuration\` (number, optional): Duration in milliseconds before the toast auto-hides. Defaults to \`3000\`.

- \`horizontal\` (string, optional): Defines the horizontal position of the toast. Options: \`'left'\`, \`'center'\`, \`'right'\`. Defaults to \`'center'\`.

- \`vertical\` (string, optional): Defines the vertical position of the toast. Options: \`'top'\`, \`'middle'\`, \`'bottom'\`. Defaults to \`'top'\`.

- \`background\` (string, optional): Sets the background color of the toast. Options: \`'info'\`, \`'success'\`, \`'warning'\`, \`'danger'\`, \`'primary'\`, \`'secondary'\`. Defaults to \`'warning'\`.

- \`color\` (string, optional): Sets the text color. Options: \`'dark'\`, \`'light'\`. Defaults to \`'light'\`.

- \`rounded\` (string, optional): Controls the corner rounding of the toast. Options: \`'none'\`, \`'md'\`, \`'lg'\`, \`'xl'\`, \`'full'\`. Defaults to \`'md'\`.

- \`closeOnBlur\` (boolean, optional): If true, the toast will close when it loses focus. Defaults to \`true\`.

        `,
			},
		},
	},
	argTypes: {
		open: {
			table: {
				disable: true,
			},
		},
		onClose: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: ToastProps) => {
	const [open, setOpen] = useState(args.open)

	const handleClose = () => {
		setOpen(false)
	}

	const handleClick = () => {
		setOpen(false)
	}

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className='bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600'
			>
				Open Toast
			</button>
			<Toast
				{...args}
				open={open}
				onClose={handleClose}
				onClick={handleClick}
			/>
		</>
	)
}

Default.args = {
	open: false,
	body: 'Simple string message',
	horizontal: 'center',
	vertical: 'middle',
	rounded: 'md',
	background: 'info',
	color: 'dark',
	closeBackground: 'info',
	closeColor: 'light',
	autohide: true,
	autohideDuration: 3000,
	closeOnBlur: false,
}
