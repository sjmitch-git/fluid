import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '..'
import { PaginationProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Menus/Pagination',
	component: Pagination,
	tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: PaginationProps) => {
	const [page, setPage] = useState('1')

	const handleChange = (page: string) => {
		setPage(page)
	}

	return (
		<Pagination
			{...args}
			page={page}
			onChange={handleChange}
		/>
	)
}

Default.args = {
	layout: 'horizontal',
	rounded: true,
	outline: 'none',
	outlineColor: 'dark',
	size: 'md',
	btnBackground: 'info',
	btnColor: 'light',
	results: 49,
	range: 12,
	icons: true,
	feedback: true,
	feedbackLabel: 'Page:',
	minimal: false,
}

Default.argTypes = {
	onChange: {
		table: {
			disable: true,
		},
	},
	page: {
		table: {
			disable: true,
		},
	},
	results: {
		table: {
			disable: true,
		},
	},
	range: {
		table: {
			disable: true,
		},
	},
}
