'use client'

import React, { useState, useEffect } from 'react'

import { AccordionHead, AccordionCard } from '..'

import { AccordionProps } from './types'

const defaultStyles = ''

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const layouts = {
	default: 'mb-0 border border-t-0 first:border-t',
	flush: 'border border-x-0 border-t-0 last:border-b-0',
	spaced: 'mb-2 border',
}

const Accordion = ({
	className = defaultStyles,
	style,
	size = 'md',
	data,
	opened,
	layout = 'default',
	icon = 'symbol',
	children,
}: AccordionProps) => {
	const [open, setOpen] = useState<string>('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	const sizeClasses = sizes[size]
	const layoutClasses = layouts[layout]

	return (
		<div
			className={`accordion group ${className} ${sizeClasses}`}
			style={style}
			data-testid='accordion'
		>
			{data ? (
				data.map((item) => (
					<div
						className={`${layoutClasses} bg-light text-dark dark:bg-dark dark:text-light border-neutral`}
						key={item.id}
					>
						<AccordionHead
							id={item.id}
							name={item.name}
							title={item.title}
							icon={icon}
							open={open}
							setopen={setOpen}
						/>

						<AccordionCard
							title={item.title || item.name}
							src={item.src}
							description={item.description}
							link={item.link}
						/>
					</div>
				))
			) : (
				<div>{children}</div>
			)}
		</div>
	)
}

export default Accordion
