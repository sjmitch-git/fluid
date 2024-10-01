import React from 'react'

import { twMerge } from 'tailwind-merge'

import { ButtonGroupProps } from './types'

const defaultStyles = 'buttongroup group inline-flex overflow-hidden'

const layouts = {
	horizontal: 'flex-row',
	vertical: 'flex-col text-start',
}

const outlines = {
	none: '',
	thin: 'border-2',
	thick: 'border-4',
}

const outlineColors = {
	none: 'border-transparent',
	light: 'border-light',
	dark: 'border-dark',
	grey: 'border-neutral',
}

const ButtonGroup = ({
	className,
	label = 'Button group',
	layout = 'horizontal',
	rounded = true,
	children,
	outline,
	outlineColor = 'light',
}: ButtonGroupProps) => {
	let layoutClasses = layouts[layout]
	let outlineClasses = ''
	let outlineColorClasses = ''

	if (outline) {
		outlineClasses = outlines[outline]
		outlineColorClasses = outlineColors[outlineColor]
	}

	return (
		<div
			className={twMerge(
				`buttongroup group inline-flex overflow-hidden ${layoutClasses} ${outlineClasses} ${outlineColorClasses} ${
					rounded ? 'rounded-md' : 'rounded-none'
				}`,
				className
			)}
			role='group'
			aria-label={label}
			data-testid='buttongroup'
		>
			{children}
		</div>
	)
}

export default ButtonGroup
