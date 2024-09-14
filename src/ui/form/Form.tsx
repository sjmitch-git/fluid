import React, { useRef, useState, useCallback } from 'react'

import { Button } from '@/ui'

import { FormProps } from './types'

const Form = ({
	className = '',
	style,
	name = 'form',
	onSubmit,
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
	cancelOutline = false,
	buttonTextcase = 'normal-case',
	buttonLayout = 'default',
	separator = false,
}: FormProps) => {
	const form = useRef<HTMLFormElement | null>(null)
	const [valid, setValid] = useState(false)

	const handleInputChange = () => {
		if (form && form.current) setValid(form.current.checkValidity())
	}

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
		['handleInputChange']
	)

	return (
		<form
			className={`form group flex flex-col gap-8 ${className}`}
			style={style}
			name={name}
			id={name}
			ref={setFormRef}
			onSubmit={onSubmit}
		>
			{children}
			{actions && (
				<>
					{separator && <hr className='border-current border-t-2 opacity-70' />}
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
								textcase={buttonTextcase}
								layout={buttonLayout}
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
							textcase={buttonTextcase}
							layout={buttonLayout}
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
