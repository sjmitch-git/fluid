import React from 'react'
import { forwardRef } from 'react'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const defaultStyles =
	'button group flex gap-2 items-center justify-center group-[.flex-col]:justify-start scale-100'
const outlineStyles = 'border-solid border-current'
const stateStyles =
	'disabled:opacity-50 disabled:grayscale focus-visible:outline-none hover:scale-110 hover:group-[.buttongroup]:scale-100  hover:disabled:scale-100 hover:group-[.buttongroup]:text-info focus:text-info focus-visible:text-info focus-within:text-accent'

const sizes = {
	xs: 'text-xs p-1 border',
	sm: 'text-sm p-2 border-2',
	md: 'text-base p-3 border-4',
	lg: 'text-lg p-4 border-[6px]',
	xl: 'text-xl p-4 border-8',
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
		className = 'font-semibold tracking-widest',
		background = 'primary',
		color = 'light',
		layout = 'default',
		outline = false,
		type = 'button',
		title,
		id,
		disabled,
		onClick,
		onBlur,
		tabindex,
		role = 'button',
		textcase = 'capitalize',
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
			className={`${defaultStyles} ${className} ${sizeClasses} ${textcase} ${backgroundClasses} ${colorClasses} ${layoutClasses} ${outlineClasses} ${stateStyles}`}
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
