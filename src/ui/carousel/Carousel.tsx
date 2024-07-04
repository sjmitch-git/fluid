'use client'
import React, { useState, useRef, useEffect } from 'react'

import { Button, Card, Gallery } from '@/ui'

import {
	HiChevronRight,
	HiChevronLeft,
	HiArrowCircleLeft,
	HiArrowCircleRight,
	HiOutlineArrowRight,
	HiOutlineArrowLeft,
} from 'react-icons/hi'

import { CarouselProps } from './types'

const defaultStyles = 'relative flex justify-center rounded-lg w-auto border border-neutral'

const iconSizes = {
	md: 18,
	lg: 24,
	xl: 32,
}

const Carousel = ({
	data,
	caption = false,
	autoplay = false,
	autoplayDuration = 3000,
	gallery = true,
	className = '',
	rtl = false,
	aspect = 'landscape',
	buttonLayout = 'circle',
	buttonIcon = 'chevron',
	buttonSize = 'md',
	buttonBackground = 'dark',
	buttonColor = 'light',
	buttonOutline = true,
	children,
}: CarouselProps) => {
	const iconSize = iconSizes[buttonSize]
	const [index, setIndex] = useState(0)
	const [position, setPosition] = useState(0)
	const [touchPosition, setTouchPosition] = useState<number>(null!)
	const inner = useRef<HTMLDivElement>(null!)
	const intervalRef = useRef<number>(null!)
	const playDirection = useRef<string>('forward')

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

	const setNext = () => {
		if (index === data.length - 1) return
		setPosition(position - getInnerWidth())
		setIndex(index + 1)
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
				className={`carousel ${defaultStyles} ${className}`}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
			>
				{!autoplay && (
					<div className='lg:flex p-4 hidden'>
						<Button
							onClick={setPrevious}
							className='m-auto rtl:rotate-180'
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
				)}
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
					<div className='lg:flex hidden p-4'>
						<Button
							onClick={setNext}
							className='m-auto rtl:rotate-180'
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
				)}
			</div>
		</>
	)
}

export default Carousel
