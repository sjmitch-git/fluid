'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { backgrounds, colors } from '../@utils'

import { ToastProps } from './types'
import { CloseButton } from '..'

const horizontals = {
	left: 'left-4',
	center: 'left-1/2 -translate-x-1/2',
	right: 'right-4',
}

const verticals = {
	top: 'top-4',
	middle: 'top-1/2 -translate-y-1/2',
	bottom: 'bottom-4',
}

const roundeds = {
	none: 'rounded-none',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl',
	full: 'rounded-full',
}

const Toast = ({
	background = 'warning',
	color = 'light',
	rounded = 'md',
	open = false,
	body,
	horizontal = 'center',
	vertical = 'top',
	autohide = true,
	autohideDuration = 3000,
	className = '',
	style,
	onClose,
	onClick,
	closeOnBlur = true,
}: ToastProps) => {
	const [show, setShow] = useState<boolean>(false)
	const toastRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (open) {
			setShow(true)
			toastRef.current?.focus()
			if (autohide) {
				const timer = setTimeout(() => {
					setShow(false)
					onClose && onClose()
				}, autohideDuration)
				return () => clearTimeout(timer)
			}
		} else {
			setShow(false)
		}

		return () => {
			setShow(false)
		}
	}, [open, autohide, autohideDuration, onClose])

	const animationClasses = useMemo(() => {
		return `transition-opacity duration-500 ${
			show ? 'visible opacity-100' : 'invisible opacity-0'
		}`
	}, [show])

	const otherClasses = useMemo(() => {
		const horizontalClasses = horizontals[horizontal]
		const verticalClasses = verticals[vertical]
		const backgroundClasses = backgrounds[background]
		const colorClasses = colors[color]
		const roundedClasses = roundeds[rounded]

		return `${horizontalClasses} ${verticalClasses} ${backgroundClasses} ${colorClasses} ${roundedClasses}`
	}, [horizontal, vertical, background, color, rounded])

	const handleClick = onClick || onClose

	return (
		<aside
			className={twMerge(
				`toast fixed z-100 min-w-80 py-4 px-6 ${className} ${otherClasses} ${animationClasses}`,
				className
			)}
			style={style}
			id='toast'
			role='alert'
			tabIndex={-1}
			ref={toastRef}
			onClick={handleClick}
			onBlur={() => {
				if (!closeOnBlur) return
				setShow(false)
				onClose && onClose()
			}}
		>
			<div className='toast-body whitespace-nowrap'>{body}</div>
			{!autohide && (
				<CloseButton
					layout='circle'
					size='sm'
					onClick={() => {
						setShow(false)
						onClose && onClose()
					}}
					className='absolute top-1 right-1'
				/>
			)}
		</aside>
	)
}

export default Toast
