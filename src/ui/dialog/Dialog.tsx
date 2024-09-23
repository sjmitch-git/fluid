'use client'

import React, { useEffect, useRef } from 'react'
import { DialogProps } from './types'
import { CloseButton } from '@/ui'

import { useDisableBack } from './hooks/useDisableBack'

const Dialog = ({
	open = false,
	modal = true,
	onClose,
	title,
	titleSize = 'lg',
	titleBold = false,
	children,
}: DialogProps) => {
	if (modal) useDisableBack()
	const dialog = useRef<HTMLDialogElement>(null!)
	const closeSize = modal ? 'lg' : 'md'

	useEffect(() => {
		const dialogRef = dialog.current
		const handleClose = () => {
			if (modal) document.body.style.overflow = ''
		}

		if (dialogRef) dialogRef.addEventListener('close', handleClose, false)

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		document.addEventListener('keyup', handleEscape, false)

		if (open) {
			if (modal) {
				dialogRef.showModal()
				document.body.style.overflow = 'hidden'
			} else dialogRef.show()
		} else dialogRef.close()

		return () => {
			handleClose()
			if (dialogRef) dialogRef.removeEventListener('close', handleClose, false)
			document.removeEventListener('keyup', handleEscape, false)
		}
	}, [open, modal, onClose])

	return (
		<dialog
			id='dialog'
			ref={dialog}
			className={`dialog backdrop:bg-black backdrop:opacity-60 border-none ${
				modal
					? 'shadow-none dark:bg-dark dark:text-light'
					: 'shadow-md shadow-dark dark:shadow-light bg-dark text-light dark:bg-light dark:text-dark rounded-md'
			}`}
		>
			<div className='dialog-header p-4'>
				{title && (
					<h2
						className={`dialog-title ${
							modal ? 'text-center' : 'text-start'
						} text-${titleSize} ${titleBold ? 'font-bold' : 'font-normal'}`}
					>
						{title}
					</h2>
				)}
				<CloseButton
					onClick={onClose}
					layout='circle'
					size={closeSize}
					className={`${modal ? 'fixed right-3 top-3' : 'absolute right-1 top-1'}  !p-0`}
					background='dark'
					color='light'
				/>
			</div>
			<div className={`dialog-content p-4 pt-0 max-w-md`}>{children}</div>
		</dialog>
	)
}

export default Dialog
