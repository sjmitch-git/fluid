import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '..'
import { DialogProps } from '../types'
import { Tabs } from '@/ui'
import { LoginRegister } from '../../tabs/stories/Tabs.stories'

const codeExample = `<Dialog
  open={isOpen}
  modal={false}
  title="Dialog Title"
  titleSize="lg"
  titleBold={true}
  onClose={() => console.log('Dialog closed')}
>
  <p>A simple dialog message!</p>
</Dialog>`

const modalExample = `<Dialog
  open={isOpen}
  modal={true}
  title="Log-in to your account"
  titleSize="lg"
  titleBold={true}
  onClose={() => console.log('Dialog closed')}
>
  <Tabs {...props}>{children}</Tabs>
</Dialog>`

const meta: Meta = {
	title: 'Fluid UI/Feedback/Dialog',
	component: Dialog,
	parameters: {
		docs: {
			source: {
				code: codeExample,
			},
			description: {
				component: `
The **Dialog** component displays a modal or non-modal dialog box with customizable content. It can be used to create a prompt or notification that the user needs to respond to.

### Import
\`\`\`tsx
import { Dialog } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// simple dialog
${codeExample}
\`\`\`

\`\`\`tsx
// modal dialog
${modalExample}
\`\`\`

### Props:
- \`open\` (boolean): Whether the dialog is open or closed.
- \`modal\` (boolean, optional): Whether the dialog is modal (blocks background interaction). Defaults to true.
- \`title\` (string, optional): The title of the dialog.
- \`titleSize\` ('sm' | 'md' | 'lg' | 'xl', optional): The size of the dialog title. Defaults to 'lg'.
- \`titleBold\` (boolean, optional): Whether the dialog title is bold. Defaults to false.
- \`onClose\` (function): A callback function that fires when the dialog is closed.
        `,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof Dialog>

export const SimpleDialog: Story = (args: DialogProps) => {
	const [open, setOpen] = useState(args.open)

	const handleClose = () => {
		setOpen(false)
		if (args.onClose) args.onClose()
	}

	/* const handleSubmit = (data: { [key: string]: string }) => {
		console.log('data', data)
		handleClose()
	} */

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className='bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600'
			>
				Open Dialog
			</button>
			<Dialog
				{...args}
				open={open}
				onClose={handleClose}
			>
				<p>A simple dialog message!</p>
			</Dialog>
		</>
	)
}

SimpleDialog.args = {
	title: 'Dialog Title',
	titleSize: 'lg',
	titleBold: true,
	open: false,
	modal: false,
	onClose: () => console.log('Dialog closed'),
}

SimpleDialog.argTypes = {
	submit: {
		table: {
			disable: true,
		},
	},
	onClose: {
		table: {
			disable: true,
		},
	},
	open: {
		table: {
			disable: true,
		},
	},
	modal: {
		table: {
			disable: true,
		},
	},
}

export const ModalDialog: Story = {
	parameters: {
		docs: {
			source: {
				code: `${modalExample}`,
			},
		},
	},
	render: (args) => {
		const [open, setOpen] = useState(false)

		const handleClose = () => {
			setOpen(false)
			if (args.onClose) args.onClose()
		}

		return (
			<>
				<button
					onClick={() => setOpen(true)}
					className='bg-blue-800 font-semibold text-white px-4 py-2 rounded hover:bg-blue-600'
				>
					Log-in
				</button>
				<Dialog
					{...args}
					open={open}
					onClose={handleClose}
				>
					<Tabs {...LoginRegister.args}>{LoginRegister.args?.children}</Tabs>
				</Dialog>
			</>
		)
	},
	args: {
		title: 'Log-in to your account',
		titleSize: 'lg',
		titleBold: true,
		open: false,
		modal: true,
		onClose: () => console.log('Dialog closed'),
	},
}

/* ModalDialog.args = {
	title: 'Log-in to your account',
	titleSize: 'lg',
	titleBold: true,
	open: false,
	modal: true,
	onClose: () => console.log('Dialog closed'),
} */

ModalDialog.argTypes = {
	...SimpleDialog.argTypes,
}
