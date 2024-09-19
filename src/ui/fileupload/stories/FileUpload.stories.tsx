import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from '..'
import { FileUploadProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Forms/File Upload',
	component: FileUpload,
	tags: ['autodocs'],
} satisfies Meta<typeof FileUpload>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = (args: FileUploadProps) => {
	const [files, setFiles] = useState<File[]>([])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newFiles = event.target.files ? Array.from(event.target.files) : []
		setFiles(newFiles)
		console.log('STORY add files', files)
	}

	const handleSetFiles = (newFiles: File[]) => {
		console.log('STORY modified files', newFiles)
		setFiles(newFiles)
	}

	return (
		<FileUpload
			{...args}
			onChange={handleChange}
			setFiles={handleSetFiles}
		/>
	)
}

Default.args = {
	label: 'Upload',
	accept: 'image/*',
	showMultiple: true,
	multipleLabel: 'Multiple',
	icon: true,
	size: 'md',
}

Default.argTypes = {
	size: {
		options: ['sm', 'md', 'lg', 'xl'],
	},
	required: {
		table: {
			disable: true,
		},
	},
	layout: {
		table: {
			disable: true,
		},
	},
	onChange: {
		table: {
			disable: true,
		},
	},
	setFiles: {
		table: {
			disable: true,
		},
	},
	files: {
		table: {
			disable: true,
		},
	},
}
