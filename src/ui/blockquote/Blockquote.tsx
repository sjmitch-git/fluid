import React, { useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { BlockquoteProps } from './types'

const sizes = {
	md: 'text-md',
	lg: 'text-lg',
	xl: 'text-xl',
}

const Blockquote = ({
	text,
	author,
	footerAlign = 'right',
	size = 'md',
	cite,
	className = '',
	style,
}: BlockquoteProps) => {
	const sizeClasses = useMemo(() => sizes[size], [size])

	return (
		<blockquote
			className={twMerge(
				`border-l-[.5em] border-gray-500 px-4 py-2 italic bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${sizeClasses}`,
				className
			)}
			cite={cite}
			style={style}
		>
			<p className='mb-2'>&ldquo;{text}&rdquo;</p>
			{author && (
				<footer
					className={`text-[.8em] text-${footerAlign} font-semibold text-gray-500 dark:text-gray-400`}
				>
					— {author}
				</footer>
			)}
		</blockquote>
	)
}

export default Blockquote
