'use client'

import React, { useRef, useEffect } from 'react'

import { CloseButton } from '@/ui'

import { useDisableBack } from './hooks/useDisableBack'

import { ModalProps } from './types'

const defaultStyles = 'dialog  border-none'

const themes = {
	light: 'backdrop:bg-white text-dark bg-white',
	dark: 'backdrop:bg-black text-light bg-black',
}

const Modal = ({ src, caption, alt, onClick, open, theme = 'dark' }: ModalProps) => {
	useDisableBack()
	let dialogRef = useRef<HTMLDialogElement>(null)
	let themeClasses = themes[theme]
	useEffect(() => {
		if (dialogRef.current) {
			const modal = dialogRef.current
			if (open) {
				modal.showModal()
				document.body.style.overflowY = 'hidden'
			} else {
				modal.close()
				document.body.style.overflowY = 'auto'
			}
		}
	}, [open, dialogRef])

	return (
		<dialog
			className={`${defaultStyles} ${themeClasses}`}
			ref={dialogRef}
		>
			<figure>
				<img
					src={src}
					onClick={onClick}
					alt={alt}
					className='cursor-zoom-out'
				/>
				<figcaption className='text-center p-2'>{caption}</figcaption>
			</figure>

			<CloseButton
				onClick={onClick}
				color='current'
				layout='circle'
				size='lg'
			/>
		</dialog>
	)
}

export default Modal
