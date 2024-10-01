'use client'
import React, { useState, useRef, useEffect } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button, Gallery } from '@/ui'

import {
	HiChevronRight,
	HiChevronLeft,
	HiOutlineArrowRight,
	HiOutlineArrowLeft,
} from 'react-icons/hi'

import { CarouselProps } from './types'

const iconSizes = {
	md: 18,
	lg: 24,
	xl: 32,
}

const outlineWidths = {
	none: 'outline-0',
	thin: 'outline-1',
	medium: 'outline-2',
	thick: 'outline-4',
}

const roundedWidths = {
	none: 'rounded-0',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
}

const Carousel = ({
	data,
	caption = false,
	autoplay = false,
	autoplayDuration = 3000,
	outline = 'medium',
	gallery = true,
	className = '',
	rtl = false,
	aspect = 'landscape',
	rounded = 'none',
	buttonsPosition = 'middle',
	buttonLayout = 'circle',
	buttonIcon = 'chevron',
	buttonSize = 'md',
	buttonBackground = 'dark',
	buttonColor = 'light',
	buttonOutline = true,
	children,
}: CarouselProps) => {
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [touchPosition, setTouchPosition] = useState<number>(null!)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

	const buttonsPositions = {
		top: 'top-2',
		middle: 'top-[38%]',
		bottom: `${caption ? 'bottom-12' : 'bottom-2'}`,
	}

	const iconSize = iconSizes[buttonSize]
	const outlineClasses = outlineWidths[outline]
	const roundedClasses = roundedWidths[rounded]
	const buttonsPositionClasses = buttonsPositions[buttonsPosition]

	const getInnerWidth = () => {
		return inner.current.offsetWidth
	}

	let style

	if (rtl) {
		style = {
			right: position + 'px',
		}
	} else {
		style = {
			left: position + 'px',
		}
	}

	let heightStyle

	if (aspect === 'landscape') {
		heightStyle = {
			height: 286,
		}
	} else if (aspect === 'portrait') {
		heightStyle = {
			height: 400,
		}
	} else if (aspect === 'video') {
		heightStyle = {
			height: 190,
		}
	} else if (aspect === 'phone') {
		heightStyle = {
			height: 533,
		}
	} else {
		heightStyle = {
			height: 380,
		}
	}

	useEffect(() => {
		const startAutoplay = () => {
			intervalRef.current = window.setTimeout(() => {
				if (index === 0) playDirection.current = 'forward'
				else if (index === data.length - 1) playDirection.current = 'backward'
				if (playDirection.current === 'forward') setNext()
				else setPrevious()
			}, autoplayDuration)
		}
		if (autoplay) startAutoplay()
		return () => {
			clearInterval(intervalRef.current)
		}
	})

	const clickNext = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setNext()
	}

	const setNext = () => {
		if (index === data.length - 1) return
		setPosition(position - getInnerWidth())
		setIndex(index + 1)
	}

	const clickPrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		e.preventDefault()
		setPrevious()
	}

	const setPrevious = () => {
		if (index === 0) return
		setPosition(position + getInnerWidth())
		setIndex(index - 1)
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setTouchPosition(e.touches[0].clientX)
	}

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		if (touchPosition === null || autoplay) return
		const diff = touchPosition - e.touches[0].clientX

		if (diff > 5) {
			if (rtl) setPrevious()
			else setNext()
		} else if (diff < -5) {
			if (rtl) setNext()
			else setPrevious()
		}

		setTouchPosition(null!)
	}

	return (
		<>
			<div
				className={twMerge(
					`carousel group relative flex justify-center overflow-hidden w-auto outline outline-neutral ${outlineClasses} ${roundedClasses}`,
					className
				)}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				<div
					className={`inner max-w-md relative overflow-hidden aspect-${
						aspect === 'circle' ? 'square' : aspect === 'phone' ? '[9/16]' : aspect
					}`}
					ref={inner}
					style={heightStyle}
				>
					{gallery ? (
						<Gallery
							className={`oveflow-hidden !flex !gap-0 relative transition-all duration-500`}
							style={style}
							data={data}
							caption={caption}
							aspect={aspect}
						/>
					) : (
						<div
							className={`oveflow-hidden !flex h-full transition-all duration-500 relative`}
							style={style}
						>
							{children}
						</div>
					)}
				</div>
				{!autoplay && (
					<>
						<div className={`absolute z-10 left-2 ${buttonsPositionClasses}`}>
							<Button
								onClick={(e) => clickPrevious(e)}
								className={`m-auto opacity-30 hover:opacity-100 disabled:hidden`}
								disabled={index === 0}
								layout={buttonLayout}
								background={buttonBackground}
								color={buttonColor}
								outline={buttonOutline}
							>
								{buttonIcon === 'arrow' ? (
									<HiOutlineArrowLeft size={iconSize} />
								) : (
									<HiChevronLeft size={iconSize} />
								)}
							</Button>
						</div>

						<div className={`absolute z-10 right-2 ${buttonsPositionClasses}`}>
							<Button
								onClick={(e) => clickNext(e)}
								className={`m-auto opacity-30 hover:opacity-100 disabled:hidden`}
								disabled={index === data.length - 1}
								layout={buttonLayout}
								background={buttonBackground}
								color={buttonColor}
								outline={buttonOutline}
							>
								{buttonIcon === 'arrow' ? (
									<HiOutlineArrowRight size={iconSize} />
								) : (
									<HiChevronRight size={iconSize} />
								)}
							</Button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default Carousel
