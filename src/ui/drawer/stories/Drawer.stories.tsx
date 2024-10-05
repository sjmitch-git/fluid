import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from '..'
import { DrawerProps } from '../types'
import { Form } from '@/ui'
import { NewsletterForm } from '../../form/stories/Form.stories'

const meta: Meta = {
	title: 'Fluid UI/Menus/Drawer',
	component: Drawer,
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
	},
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: DrawerProps) => {
	const [open, setOpen] = useState(args.open)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className='bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600'
			>
				Open Drawer
			</button>
			<Drawer
				{...args}
				open={open}
				onClose={handleClose}
			>
				<div>
					<p>Some simple HTML content</p>
				</div>
			</Drawer>
		</>
	)
}

export const WithForm: Story = (args: DrawerProps) => {
	const [open, setOpen] = useState(args.open)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<button
				onClick={() => setOpen(!open)}
				className='bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600'
			>
				Open Drawer
			</button>
			<Drawer
				{...args}
				open={open}
				onClose={handleClose}
			>
				<Form
					{...NewsletterForm.args}
					className='max-w-2xl pb-4 mx-auto'
				>
					{NewsletterForm.args?.children}
				</Form>
			</Drawer>
		</>
	)
}

Default.args = {
	backdrop: true,
	position: 'bottom',
	open: false,
}

WithForm.args = {
	backdrop: true,
	position: 'bottom',
	open: false,
}
