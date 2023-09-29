import React, { useState, useEffect } from 'react'

import { Button, Card, CardBody, CardImage, CardFooter } from '..'

import { FaPlus, FaMinus, FaChevronLeft, FaChevronDown } from 'react-icons/fa'

import { AccordionProps } from './types'

const defaultStyles = ''
const iconStyles = 'aspect-square text-current w-6 group-[.text-sm]:w-4 group-[.text-lg]:w-8'

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
}: AccordionProps) => {
	const [open, setOpen] = useState<string>()

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
			{data?.map((item, _index) => (
				<div
					className={`${layoutClasses} ${themeClasses}`}
					key={item.id}
				>
					<h3
						className={`peer font-semibold opacity-90 m-0 flex cursor-pointer items-center justify-between text-xl group-[.text-sm]:text-lg group-[.text-lg]:text-2xl p-2 capitalize ${
							open === item.id ? 'open' : ''
						}`}
						onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
					>
						{item.title || item.name}

						<Button
							className='text-info shadow-none !p-0'
							layout='circle'
							onClick={() => setOpen(`${open === item.id ? '' : item.id}`)}
							background='transparent'
							color='info'
						>
							<>
								{open === item.id ? (
									icon === 'symbol' ? (
										<FaMinus className={iconStyles} />
									) : (
										<FaChevronDown className={iconStyles} />
									)
								) : icon === 'symbol' ? (
									<FaPlus className={iconStyles} />
								) : (
									<FaChevronLeft className={iconStyles} />
								)}

								<span className='sr-only'>Toggle section</span>
							</>
						</Button>
					</h3>
					<section
						className='max-h-0 peer-[.open]:max-h-56 overflow-y-auto transition-all duration-500'
						role='group'
					>
						<Card
							layout='row'
							theme={theme}
							className='p-2'
						>
							{item.src && (
								<CardImage
									title={item.name}
									src={item.src}
									aspect='square'
								/>
							)}
							<CardBody>
								<p className='line-clamp-2'>{item.description}</p>
								<CardFooter
									link={item.link}
									linkLabel={item.name}
								/>
							</CardBody>
						</Card>
					</section>
				</div>
			))}
		</div>
	)
}

export default Accordion
