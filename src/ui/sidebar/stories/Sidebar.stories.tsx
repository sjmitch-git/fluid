import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '..'
import { SidebarProps } from '../types'
import { Tabs } from '../..'
import { LoginRegister } from '../../tabs/stories/Tabs.stories'

const meta: Meta = {
	title: 'Fluid UI/Menus/Sidebar',
	component: Sidebar,
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
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: SidebarProps) => {
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
				Open Sidebar
			</button>
			<Sidebar
				{...args}
				open={open}
				onClose={handleClose}
			>
				<Tabs {...LoginRegister.args}>{LoginRegister.args?.children}</Tabs>
			</Sidebar>
		</>
	)
}

Default.args = {
	backdrop: true,
	position: 'right',
	open: false,
}
