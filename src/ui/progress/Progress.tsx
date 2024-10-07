'use client'

import React, { useEffect, useState } from 'react'
import { ProgressProps } from './types'
import { twMerge } from 'tailwind-merge'

const Progress = ({
	totalSize,
	downloadedSize,
	unit = 'mb',
	id = 'file',
	value = 0,
	max = 100,
	className = '',
	style,
}: ProgressProps) => {
	const [progress, setProgress] = useState(value || 0)

	useEffect(() => {
		if (totalSize > 0) {
			const percentage = (downloadedSize / totalSize) * 100
			setProgress(Math.min(percentage, 100))
		}
	}, [totalSize, downloadedSize])

	return (
		<div className='progress-wrapper'>
			<progress
				className={twMerge(
					`progress w-full h-4 rounded-lg bg-gray-200 text-dark darK:text-light`,
					className
				)}
				style={style}
				id={id}
				value={progress}
				max={max}
			>
				{progress.toFixed(2)}%
			</progress>
			<div className='text-sm text-center mt-2'>
				{downloadedSize.toFixed(2)} {unit} / {totalSize} {unit}
			</div>
		</div>
	)
}

export default Progress
