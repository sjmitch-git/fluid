import React from 'react'

import { ButtonGroupProps } from './types'

const defaultStyles = 'buttongroup group inline-flex overflow-hidden'

const layouts = {
	horizontal: 'flex-row',
	vertical: 'flex-col text-start',
}

const outlines = {
	none: '',
	thin: 'p-[2px] gap-[2px]',
	thick: 'p-1 gap-1',
}

const outlineColors = {
	none: 'bg-transparent',
	light: 'bg-light',
	dark: 'bg-dark',
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
			className={`${defaultStyles} ${layoutClasses} ${outlineClasses} ${outlineColorClasses}  ${
				rounded ? 'rounded-md' : 'rounded-none'
			} ${className}`}
			role='group'
			aria-label={label}
			data-testid='buttongroup'
		>
			{children}
		</div>
	)
}

export default ButtonGroup
