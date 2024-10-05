import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from '..'

const links = [
	{
		href: '#',
		label: 'Group Link',
		links: [
			{
				href: '#',
				label: 'Sub Link 1',
				links: [
					{
						href: '#',
						label: 'Sub sub link 1',
					},
					{
						href: '#',
						label: 'Sub sub link 2',
					},
				],
			},
			{
				href: '#',
				label: 'Sub Link 2',
			},
			{
				href: '#',
				label: 'Sub Link 3',
			},
		],
	},
]

const meta: Meta = {
	title: 'Fluid UI/Menus/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	argTypes: {
		links: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		links: links,
		size: 'md',
		buttonLayout: 'circle',
		buttonBackground: 'transparent',
		buttonColor: 'current',
	},
}

export const Styled: Story = {
	args: {
		links: links,
		size: 'lg',
		buttonLayout: 'circle',
		buttonBackground: 'primary',
		buttonColor: 'light',
		className:
			'bg-dark text-light dark:bg-light dark:text-dark rounded-full py-3 ps-6 pe-4 border-2 border-accent',
	},
}
