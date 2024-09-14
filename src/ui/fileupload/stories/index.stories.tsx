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
	const [value, setValue] = useState('')
	const [name, setName] = useState('')
	const [fileURL, setFileURL] = useState('')

	const convertToKB = (size: number) => {
		return `${(size / 1000).toFixed()} KB`
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			const file = event.target.files[0]
			setFileURL(URL.createObjectURL(file))
			setValue(file.name + ' - ' + convertToKB(file.size))
			setName(file.name)
		}
	}

	return (
		<FileUpload
			{...args}
			value={value}
			fileURL={fileURL}
			onChange={handleChange}
		/>
	)
}

Default.args = {
	label: 'Upload a file',
	accept: 'image/*',
	multiple: false,
	icon: true,
	size: 'md',
}

Default.argTypes = {
	size: {
		options: ['sm', 'md', 'lg', 'xl'],
	},
	accept: {
		control: 'select',
		options: [
			'*',
			'audio/*',
			'image/*',
			'video/*',
			'.doc,.docx,.pdf,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		],
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
	multiple: {
		table: {
			disable: true,
		},
	},
	fileURL: {
		table: {
			disable: true,
		},
	},
	value: {
		table: {
			disable: true,
		},
	},
}
