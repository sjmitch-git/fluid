'use client'

import React from 'react'

import { AccordionHeadProps } from '../types'

import { Button } from '../..'

import { FaPlus, FaMinus, FaChevronLeft, FaChevronDown } from 'react-icons/fa'

const iconStyles = 'aspect-square text-current w-6 group-[.text-sm]:w-4 group-[.text-lg]:w-8'

const AccordionHead = ({ icon = 'symbol', id, open, setopen, title, name }: AccordionHeadProps) => {
	return (
		<h3
			className={`peer font-semibold opacity-90 m-0 flex cursor-pointer items-center justify-between text-xl group-[.text-sm]:text-lg group-[.text-lg]:text-2xl p-2 capitalize ${
				open === id ? 'open' : ''
			}`}
			onClick={() => setopen(`${open === id ? '' : id}`)}
		>
			{title || name}

			<Button
				className='shadow-none !p-0'
				layout='circle'
				onClick={() => setopen(`${open === id ? '' : id}`)}
				background='transparent'
				color='primary'
			>
				<>
					{open === id ? (
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
	)
}

export default AccordionHead
