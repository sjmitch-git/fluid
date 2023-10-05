import React from 'react'
import { forwardRef } from 'react'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const defaultStyles = 'font-semibold uppercase tracking-widest'
const outlineStyles = 'border-solid border-current'

const sizes = {
	xs: 'text-xs p-1 border',
	sm: 'text-sm p-2 border-2',
	md: 'text-base p-3 border-4',
	lg: 'text-lg p-4 border-4',
	xl: 'text-xl p-4 border-4',
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
		className = defaultStyles,
		background = 'primary',
		color = 'light',
		layout = 'default',
		outline = false,
		type = 'button',
		title = 'Click',
		id,
		disabled,
		onClick,
		onBlur,
		tabindex,
		role = 'button',
		children,
	} = props

	let sizeClasses = sizes[size]
	let backgroundClasses = backgrounds[background]
	let colorClasses = colors[color]
	let layoutClasses = layouts[layout]
	let outlineClasses = ''

	if (outline) outlineClasses = `${outlineStyles}`
	else outlineClasses = 'border-none'

	return (
		<button
			className={`button group flex gap-2 items-center justify-center disabled:opacity-50 disabled:grayscale shadow hover:shadow-lg scale-100 hover:scale-105 hover:disabled:scale-100 disabled:hover:shadow active:ring active:scale-100 focus:ring focus:ring-accent focus-visible:ring focus-within:ring ${className} ${sizeClasses} ${backgroundClasses} ${colorClasses} ${layoutClasses} ${outlineClasses}`}
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
