import React, { useEffect, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Progress from '../Progress'
import { Dialog } from '@/ui'

const codeExample = `<Progress
	totalSize={245}   // Size of data
	downloadedSize={0} // Currently downloaded size in MB
	doneMessage="Download complete!"
	unit="mb" // Unit of measurement (kb, mb, gb)
/>`

const modalExample = `<Dialog
	title='Downloading'
	open={isOpen}
	modal={true}
	onClose={handleClose}
	showClose={false}
>
	<Progress {...props} onDone={handleClose} onCancel={handleCancel} />
</Dialog>`

const meta: Meta<typeof Progress> = {
	title: 'Fluid UI/Feedback/Progress',
	component: Progress,
	parameters: {
		docs: {
			source: {
				code: codeExample,
			},

			description: {
				component: `
The **Progress** component represents a progress bar, which can be used to indicate the completion percentage of a task, such as downloading or uploading data.

### Import
\`\`\`tsx
// simple progress
import { Progress } from '@smitch/fluid'

// modal progress
import { Progress, Dialog } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// simple progress
${codeExample}
\`\`\`

\`\`\`tsx
// modal progress
${modalExample}
\`\`\`

### Key Features:
- The component dynamically updates the progress value based on the \`downloadedSize\` and \`totalSize\` props.
- It can display a custom completion message using the \`doneMessage\` prop when the task is finished.
- You can customize the appearance using Tailwind CSS via the \`className\` props. (However, progress element styling is quite limited).

### Props:
- \`totalSize\` (number): The total size of the task (e.g., file size in MB).
- \`downloadedSize\` (number): The current downloaded amount (e.g., MB).
- \`unit\` ('kb' | 'mb' | 'gb'): The unit of measurement for the downloaded and total size values. Defaults to 'mb'.
- \`doneMessage\` (string): A message to display when the task is complete.
- \`className\` (string, optional): Additional class names for styling the progress element.
- \`feedbackClasses\` (string, optional): Additional class names for styling the feedback message.
- \`style\` (object, optional): Inline styles for custom appearance.
- \`onDone\` (function, optional): A callback function that gets triggered when the download or task completes. It fires once the progress reaches 100%.
- \`onCancel\` (function, optional): A callback function that gets triggered when the user clicks the **Cancel** button, allowing the task or download to be interrupted.
        `,
			},
		},
	},
	argTypes: {
		totalSize: { control: { type: 'number', min: 0 } },
		className: { control: 'text' },
		id: {
			table: {
				disable: true,
			},
		},
		onDone: {
			table: {
				disable: true,
			},
		},
		onCancel: {
			table: {
				disable: true,
			},
		},
		showCancel: {
			table: {
				disable: true,
			},
		},
		downloadedSize: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Progress>

const ProgressComponent = (args: {
	totalSize: number
	onDone?: () => void
	onCancel?: () => void
}) => {
	const [downloadedSize, setDownloadedSize] = useState(0)
	const [isCancelled, setIsCancelled] = useState(false)

	const handleDone = () => {
		if (args.onDone) args.onDone()
	}

	const handleCancel = () => {
		setIsCancelled(true)
		if (args.onCancel) args.onCancel()
	}

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

		if (isCancelled) {
			clearInterval(interval)
			return
		}

		return () => clearInterval(interval)
	}, [args.totalSize, isCancelled])

	return (
		<Progress
			{...args}
			downloadedSize={downloadedSize}
			onDone={handleDone}
			onCancel={handleCancel}
		/>
	)
}

export const SimpleProgress: Story = {
	render: (args) => <ProgressComponent {...args} />,
	args: {
		id: 'progress-demo',
		totalSize: 245,
		unit: 'mb',
		doneMessage: 'Download complete!',
		showCancel: false,
		className: '',
	},
}

export const ModalProgress: Story = {
	parameters: {
		docs: {
			source: {
				code: `${modalExample}`,
			},
		},
	},
	render: (args) => {
		const [isOpen, setIsOpen] = useState(false)

		const handleOpen = () => {
			setIsOpen(true)
		}

		const handleClose = () => {
			setIsOpen(false)
		}

		const handleCancel = () => {
			setTimeout(() => {
				setIsOpen(false)
			}, 800)
		}

		const handleDoneModal = () => {
			setTimeout(() => {
				setIsOpen(false)
			}, 1800)
		}

		return (
			<>
				<button
					onClick={handleOpen}
					className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600'
				>
					Download
				</button>

				<Dialog
					title='Downloading'
					titleSize='lg'
					titleBold={true}
					open={isOpen}
					modal={true}
					onClose={handleClose}
					showClose={false}
				>
					{isOpen && (
						<ProgressComponent
							{...args}
							onDone={handleDoneModal}
							onCancel={handleCancel}
						/>
					)}
				</Dialog>
			</>
		)
	},
	args: {
		id: 'progress-demo',
		totalSize: 245,
		downloadedSize: 0,
		unit: 'mb',
		doneMessage: 'Download complete!',
		showCancel: true,
	},
}
