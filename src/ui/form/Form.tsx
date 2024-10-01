'use client'

import React, { useRef, useState, useCallback } from 'react'

import { twMerge } from 'tailwind-merge'

import { Button } from '@/ui'

import { FormProps } from './types'

const Form = ({
	className = '',
	style,
	name = 'form',
	onsubmit,
	onCancel,
	showCancel = false,
	actions = true,
	children,
	submitLabel = 'Submit',
	cancelLabel = 'Cancel',
	actionsLayout = 'row',
	actionsSpacing = '0',
	submitBackground = 'primary',
	submitColor = 'light',
	cancelBackground = 'transparent',
	cancelColor = 'current',
	submitOutline = false,
	submitOutlineColor = 'current',
	cancelOutline = false,
	cancelOutlineColor = 'current',
	buttonTextcase = 'normal-case',
	buttonLayout = 'default',
	buttonIsBold = false,
	separator = false,
}: FormProps) => {
	const form = useRef<HTMLFormElement | null>(null)
	const [valid, setValid] = useState(false)
	const [formData, setFormData] = useState({})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (onsubmit) {
			onsubmit(formData)
		}
	}

	const handleInputChange = useCallback((event: Event) => {
		const target = event.target as HTMLInputElement
		const { name, value } = target
		setFormData((prevData) => {
			const updatedData = {
				...prevData,
				[name]: value,
			}
			return updatedData
		})

		if (form.current) {
			setValid(form.current.checkValidity())
		}
	}, [])

	const setFormRef = useCallback(
		(node: HTMLFormElement) => {
			if (node) {
				form.current = node
				node.addEventListener('change', handleInputChange, true)
			}
			return () => {
				if (node) {
					node.removeEventListener('change', handleInputChange, true)
				}
			}
		},
		[handleInputChange]
	)

	return (
		<form
			className={twMerge(`form group flex flex-col gap-8`, className)}
			style={style}
			name={name}
			id={name}
			ref={setFormRef}
			onSubmit={handleSubmit}
		>
			{children}
			{actions && (
				<>
					{separator && <hr className='border-neutral border-t-2 opacity-70' />}
					<div
						className={`form-actions flex group justify-between flex-${actionsLayout} gap-${actionsSpacing}`}
					>
						{showCancel ? (
							<Button
								type='button'
								className={`!justify-center flex-grow`}
								background={cancelBackground}
								color={cancelColor}
								outline={cancelOutline}
								outlineColor={cancelOutlineColor}
								textcase={buttonTextcase}
								layout={buttonLayout}
								isBold={buttonIsBold}
								onClick={onCancel}
							>
								{cancelLabel}
							</Button>
						) : null}
						<Button
							type='submit'
							className={`!justify-center flex-grow`}
							background={submitBackground}
							color={submitColor}
							outline={submitOutline}
							outlineColor={submitOutlineColor}
							textcase={buttonTextcase}
							layout={buttonLayout}
							isBold={buttonIsBold}
							disabled={!valid}
						>
							{submitLabel}
						</Button>
					</div>
				</>
			)}
		</form>
	)
}

export default Form
