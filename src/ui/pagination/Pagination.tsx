'use client'

import React, { useState, useEffect, useMemo } from 'react'

import { roundUp } from '@smitch/js-lib'

import {
	HiChevronRight,
	HiChevronLeft,
	HiChevronDoubleRight,
	HiChevronDoubleLeft,
} from 'react-icons/hi'
import { ButtonGroup, Select, Button } from '@/ui'
import { PaginationProps } from './types'

const sizes = {
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const Pagination = ({
	page = '1',
	feedback = true,
	feedbackLabel = 'Page',
	range,
	results,
	size = 'md',
	layout = 'horizontal',
	rounded = true,
	outline = 'none',
	outlineColor = 'dark',
	icons = true,
	minimal = false,
	btnBackground,
	btnColor,
	onChange,
	className = '',
	style,
}: PaginationProps) => {
	const [selectValue, setSelectValue] = useState(page)

	useEffect(() => {
		setSelectValue(page)
	}, [page])

	const sizeClasses = useMemo(() => sizes[size], [size])

	const handleChange = (e: React.FormEvent<HTMLSelectElement>): void =>
		onChange(e.currentTarget.value)

	const handleOnClick = (page: string) => onChange(page)

	const totalPages = useMemo(() => {
		return roundUp(results / range)
	}, [results, range])

	const options = useMemo(() => {
		return [...new Array(totalPages)].map((_el, index) => (index + 1).toString())
	}, [totalPages])

	return (
		<nav
			className={`pagination flex flex-col items-center justify-center gap-1 ${className}`}
			style={style}
			aria-label='pagination'
		>
			<ButtonGroup
				className={`pagination-buttons mb-1`}
				layout={layout}
				rounded={rounded}
				outline={outline}
				outlineColor={outlineColor}
			>
				<Button
					className={`${minimal ? 'hidden' : ''}`}
					title='First Page'
					onClick={() => handleOnClick('1')}
					disabled={page === '1'}
					size={size}
					background={btnBackground}
					color={btnColor}
				>
					{icons ? (
						<>
							<HiChevronDoubleLeft />
							<span className='sr-only'>First Page</span>
						</>
					) : (
						'First'
					)}
				</Button>
				<Button
					title='Previous Page'
					onClick={() => handleOnClick(`${Number(selectValue) - 1}`)}
					disabled={Number(selectValue) === 1}
					size={size}
					background={btnBackground}
					color={btnColor}
				>
					{icons ? (
						<>
							<HiChevronLeft />
							<span className='sr-only'>Previous Page</span>
						</>
					) : (
						'Prev'
					)}
				</Button>
				<Select
					title='Select Page'
					dropdownSize={size}
					className={`${size} border-none text-right w-12`}
					defaultValue={selectValue}
					onChange={handleChange}
					nocaret={true}
					options={options}
					rounded='none'
				/>
				<Button
					title='Next Page'
					onClick={() => handleOnClick(`${Number(selectValue) + 1}`)}
					disabled={Number(selectValue) === totalPages}
					size={size}
					background={btnBackground}
					color={btnColor}
				>
					{icons ? (
						<>
							<HiChevronRight />
							<span className='sr-only'>Next Page</span>
						</>
					) : (
						'Next'
					)}
				</Button>
				<Button
					className={`${minimal ? 'hidden' : ''}`}
					title='Last Page'
					onClick={() => handleOnClick(totalPages.toString())}
					disabled={Number(selectValue) === totalPages}
					size={size}
					background={btnBackground}
					color={btnColor}
				>
					{icons ? (
						<>
							<HiChevronDoubleRight />
							<span className='sr-only'>Last Page</span>
						</>
					) : (
						'Last'
					)}
				</Button>
			</ButtonGroup>
			{feedback && (
				<div className={`feedback ${sizeClasses}`}>
					{feedbackLabel} {selectValue} of {totalPages}
				</div>
			)}
		</nav>
	)
}

export default Pagination
