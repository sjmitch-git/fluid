import React, { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Progress from '../Progress'

const meta: Meta<typeof Progress> = {
	title: 'Fluid UI/Feedback/Progress',
	component: Progress,
	argTypes: {
		totalSize: { control: { type: 'number', min: 0 } },
		downloadedSize: { control: { type: 'number', min: 0 } },
		className: { control: 'text' },
		style: { control: 'object' },
		id: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Progress>

const IncreasingProgressComponent = (args: {
	totalSize: number
	className?: string
	style?: React.CSSProperties
}) => {
	const [downloadedSize, setDownloadedSize] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setDownloadedSize((prev) => {
				if (prev >= args.totalSize) {
					clearInterval(interval)
					return args.totalSize
				}
				return prev + 5
			})
		}, 100)

		return () => clearInterval(interval)
	}, [args.totalSize])

	return (
		<Progress
			{...args}
			downloadedSize={downloadedSize}
		/>
	)
}

export const Downloading: Story = {
	render: (args) => <IncreasingProgressComponent {...args} />,
	args: {
		id: 'progress-demo',
		totalSize: 645,
		unit: 'mb',
		className: '',
		style: {},
	},
}
