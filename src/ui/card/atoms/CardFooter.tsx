import React from 'react'

import Link from 'next/link'

import { CardFooterProps } from '../types'

const defaultStyles = 'flex px-2 pt-4 items-center mt-auto'

const CardFooter = ({ className = defaultStyles, link, linkLabel, children }: CardFooterProps) => {
	return (
		<div className={`card-footer ${className}`}>
			{children}
			{link && (
				<Link
					href={link}
					className='uppercase ms-auto before:absolute before:content-["_"] before:top-0 before:right-0 before:bottom-0 before:left-0 z-10'
					target={link.startsWith('https://') ? '_blank' : '_self'}
				>
					{linkLabel}
				</Link>
			)}
		</div>
	)
}

export default CardFooter
