'use client'

import React, { useEffect, useState } from 'react'
import { ProgressProps } from './types'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/ui'

const Progress = ({
	totalSize,
	downloadedSize = 0,
	unit = 'mb',
	id = 'progress',
	doneMessage,
	onDone,
	onCancel,
	showCancel = true,
	feedbackClasses = '',
	className = '',
	style,
}: ProgressProps) => {
	const [progress, setProgress] = useState(0)
	const [done, setDone] = useState(false)
	const [isCancelled, setIsCancelled] = useState(false)

	useEffect(() => {
		if (isCancelled) return

		if (totalSize > 0) {
			const percentage = (downloadedSize / totalSize) * 100
			setProgress(Math.min(percentage, 100))
		}

		if (downloadedSize >= totalSize) {
			setDone(true)
			if (onDone && !done) onDone()
		} else {
			setDone(false)
		}
	}, [totalSize, downloadedSize, onDone, done, isCancelled])

	const handleCancel = () => {
		setIsCancelled(true)
		if (onCancel) onCancel()
	}

	return (
		<div className='progress-wrapper min-w-96'>
			<progress
				className={twMerge(`progress w-full h-4`, className)}
				style={style}
				id={id}
				value={progress}
				max={100}
			>
				{progress.toFixed(2)}%
			</progress>
			<div className={twMerge(`progress-feedback text-sm text-center mt-2`, feedbackClasses)}>
				{done && doneMessage
					? doneMessage
					: `${progress.toFixed(0)}% of ${totalSize} ${unit}`}
				{showCancel && !done && (
					<div className='progress-cancel flex justify-center mt-4'>
						{!isCancelled && (
							<Button
								className=''
								background='transparent'
								color='danger'
								size='md'
								isBold={true}
								onClick={handleCancel}
							>
								Cancel?
							</Button>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default Progress
