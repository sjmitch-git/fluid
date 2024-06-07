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

const themes = {
	light: 'bg-light text-dark border-neutral',
	dark: 'bg-dark text-light border-neutral',
	transparent: 'bg-transparent text-current border-neutral',
}

const Accordion = ({
	className = defaultStyles,
	size = 'md',
	data,
	opened,
	layout = 'default',
	theme = 'light',
	icon = 'symbol',
	children,
}: AccordionProps) => {
	const [open, setOpen] = useState<string>('')

	useEffect(() => {
		if (opened) setOpen(opened)
	}, [opened])

	let sizeClasses = sizes[size]
	let layoutClasses = layouts[layout]
	let themeClasses = themes[theme]

	return (
		<div
			className={`accordion group ${className} ${sizeClasses}`}
			data-testid='accordion'
		>
			{data ? (
				data.map((item) => (
					<div
						className={`${layoutClasses} ${themeClasses}`}
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
							theme={theme}
							src={item.src}
							description={item.description}
							link={item.link}
						/>
					</div>
				))
			) : (
				<div className={`${layoutClasses} ${themeClasses}`}>{children}</div>
			)}
		</div>
	)
}

export default Accordion
