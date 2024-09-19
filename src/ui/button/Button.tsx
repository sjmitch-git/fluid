import React from 'react'
import { forwardRef } from 'react'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const defaultStyles =
	'button group flex gap-2 items-center justify-center group-[.flex-col]:justify-start scale-100'

/* const stateStyles =
	'disabled:opacity-50 disabled:grayscale disabled:text-gray-400 focus-visible:outline-none hover:scale-110 hover:group-[.buttongroup]:scale-100  hover:disabled:scale-100 hover:group-[.buttongroup]:opacity-50 focus:opacity-50 focus-visible:opacity-50 focus-within:opacity-50' */

const stateStyles = 'disabled:opacity-50 disabled:grayscale disabled:text-gray-400'

const sizes = {
	xs: 'text-xs p-1 border',
	sm: 'text-sm p-2 border-2',
	md: 'text-base p-3 border-4',
	lg: 'text-lg p-4 border-[6px]',
	xl: 'text-xl p-5 border-8',
}

const backgrounds = {
	info: 'bg-info',
	success: 'bg-success',
	warning: 'bg-warning',
	danger: 'bg-danger',
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	dark: 'bg-dark',
	light: 'bg-white',
	transparent: 'bg-transparent',
}

const colors = {
	info: 'text-info',
	success: 'text-success',
	warning: 'text-warning',
	danger: 'text-danger',
	primary: 'text-primary',
	secondary: 'text-secondary',
	dark: 'text-dark',
	light: 'text-light',
	current: 'text-current',
}

const borderColors = {
	info: 'border-info',
	success: 'border-success',
	warning: 'border-warning',
	danger: 'border-danger',
	primary: 'border-primary',
	secondary: 'border-secondary',
	dark: 'border-dark',
	light: 'border-light',
	current: 'border-current',
	accent: 'border-accent',
}

const layouts = {
	default: '',
	rounded: 'rounded-md',
	pill: 'rounded-full',
	square: 'aspect-square',
	circle: 'aspect-square rounded-full',
}

const Button = forwardRef<ButtonRef, ButtonProps>(function Button(props, ref) {
	const {
		size = 'md',
		className = '',
		style,
		background = 'primary',
		color = 'light',
		layout = 'default',
		outline = false,
		outlineColor = 'current',
		type = 'button',
		title,
		id,
		disabled,
		onClick,
		onBlur,
		tabindex,
		role = 'button',
		textcase = 'capitalize',
		isBold = false,
		children,
	} = props

	const sizeClasses = sizes[size]
	const backgroundClasses = backgrounds[background]
	const colorClasses = colors[color]
	const layoutClasses = layouts[layout]
	const outlineStyles = `border-solid ${borderColors[outlineColor]}`
	let outlineClasses = ''

	if (outline) outlineClasses = `${outlineStyles}`
	else outlineClasses = 'border-none'

	return (
		<button
			className={`${defaultStyles} ${className} ${sizeClasses} ${textcase} ${backgroundClasses} ${colorClasses} ${layoutClasses} ${outlineClasses} ${stateStyles} ${
				isBold ? 'font-semibold' : 'font-normal'
			} focus:text-accent`}
			style={style}
			data-testid='button'
			type={type}
			title={title}
			id={id}
			disabled={disabled}
			tabIndex={tabindex}
			onClick={onClick}
			onBlur={onBlur}
			ref={ref}
			role={role}
		>
			{children}
		</button>
	)
})

export default Button
