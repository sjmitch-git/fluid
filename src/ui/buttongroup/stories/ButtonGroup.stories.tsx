import type { Meta, StoryObj } from '@storybook/react'
import { FaPlay, FaPause, FaStop } from 'react-icons/fa'
import { ButtonGroup } from '..'
import { Button } from '@/ui'

const meta: Meta = {
	title: 'Fluid UI/ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		label: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		layout: 'horizontal',
		rounded: true,
		outline: 'none',
		outlineColor: 'light',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<>
				<Button disabled>Left</Button>
				<Button>Middle</Button>
				<Button>Right</Button>
			</>
		),
	},
}

export const Icons: Story = {
	args: {
		children: (
			<>
				<Button
					background='dark'
					size='lg'
				>
					<FaPlay />
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaPause />
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaStop />
				</Button>
			</>
		),
	},
}

export const IconsWithLabel: Story = {
	args: {
		children: (
			<>
				<Button
					background='dark'
					size='lg'
				>
					<FaPlay /> Play
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaPause /> Pause
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaStop /> Stop
				</Button>
			</>
		),
	},
}

export const Outlines: Story = {
	args: {
		outline: 'thin',
		outlineColor: 'light',
		children: (
			<>
				<Button
					background='dark'
					size='lg'
				>
					<FaPlay /> Play
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaPause /> Pause
				</Button>
				<Button
					background='dark'
					size='lg'
				>
					<FaStop /> Stop
				</Button>
			</>
		),
	},
}
