import React from 'react'
import { forwardRef } from 'react'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const defaultStyles = 'font-semibold uppercase tracking-widest'
const outlineStyles = 'border-4 border-solid border-current'

const sizes = {
	sm: 'text-sm p-2',
	md: 'text-base p-3',
	lg: 'text-lg p-4',
}

const themes = {
	info: 'bg-info text-light',
	success: 'bg-success text-light',
	warning: 'bg-warning text-light',
	danger: 'bg-danger text-light',
	primary: 'bg-primary text-light',
	secondary: 'bg-secondary text-light',
	dark: 'bg-dark text-light',
	light: 'bg-light text-dark',
	transparent: 'bg-transparent text-current',
}

const outLineThemes = {
	info: 'text-info bg-light',
	success: 'text-success bg-light',
	warning: 'text-warning bg-light',
	danger: 'text-danger bg-light',
	primary: 'text-primary bg-light',
	secondary: 'text-secondary bg-light',
	dark: 'text-dark bg-light',
	light: 'text-light bg-dark',
	transparent: '!bg-transparent text-current',
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
		theme = 'primary',
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
	let themeClasses = ''
	let layoutClasses = layouts[layout]
	let outlineClasses = ''

	if (outline) {
		outlineClasses = `${outlineStyles} ${outLineThemes[theme]}`
	} else {
		themeClasses = themes[theme]
	}

	return (
		<button
			className={`button group flex gap-1 items-center justify-center disabled:opacity-50 disabled:grayscale shadow hover:shadow-lg scale-100 hover:scale-105 hover:disabled:scale-100 disabled:hover:shadow active:ring active:scale-100 focus:ring focus:ring-accent focus-visible:ring focus-within:ring ${className} ${sizeClasses} ${themeClasses} ${layoutClasses} ${outlineClasses}`}
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
