import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '..'
import { ToastProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Feedback/Toast',
	component: Toast,
	tags: ['autodocs'],
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
	vertical: 'top',
	rounded: 'md',
	background: 'info',
	color: 'light',
	closeBackground: 'info',
	closeColor: 'light',
	autohide: true,
	autohideDuration: 3000,
	closeOnBlur: false,
}
