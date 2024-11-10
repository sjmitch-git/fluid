'use client'

import React from 'react'

import { AccordionItemProps } from '../types'

import { AccordionHead, AccordionSection } from '../atoms'

const themeClasses = 'bg-light text-dark dark:bg-dark dark:text-light border-neutral'

const AccordionItem = ({
	layoutClasses,
	id,
	title,
	icon = 'symbol',
	open,
	setOpen,
	children,
}: AccordionItemProps) => {
	return (
		<div
			className={`${layoutClasses} ${themeClasses}`}
			key={id}
		>
			<AccordionHead
				id={id}
				title={title}
				icon={icon}
				open={open}
				setopen={setOpen}
			/>
			<AccordionSection>{children}</AccordionSection>
		</div>
	)
}

export default AccordionItem
