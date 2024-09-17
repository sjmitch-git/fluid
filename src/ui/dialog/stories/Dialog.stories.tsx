import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '..'
import { DialogProps } from '../types'
import { Tabs } from '@/ui'
import { LoginRegister } from '../../tabs/stories/Tabs.stories'

const meta: Meta = {
	title: 'Fluid UI/Dialog',
	component: Dialog,
	tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
	name: 'Dialog',
	render: (args: DialogProps) => {
		const [open, setOpen] = useState(args.open)

		const handleClose = () => {
			setOpen(false)
			if (args.onClose) args.onClose()
		}

		const handleSubmit = (data: { [key: string]: string }) => {
			console.log('data', data)
			handleClose()
		}

		return (
			<>
				<button
					onClick={() => setOpen(true)}
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
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
	},
	argTypes: {
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
	},
	args: {
		title: 'Dialog Title',
		titleSize: 'lg',
		titleBold: true,
		open: false,
		modal: false,
		onClose: () => console.log('Dialog closed'),
	},
}

export const ModalDialog: Story = {
	render: (args: DialogProps) => {
		const [open, setOpen] = useState(args.open)

		const handleClose = () => {
			setOpen(false)
			if (args.onClose) args.onClose()
		}

		const handleSubmit = (data: { [key: string]: string }) => {
			console.log('data', data)
			handleClose()
		}

		return (
			<>
				<button
					onClick={() => setOpen(true)}
					className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
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
	argTypes: {
		...Default.argTypes,
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
