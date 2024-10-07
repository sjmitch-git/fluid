import React, { useMemo } from 'react'
import { forwardRef } from 'react'

import { twMerge } from 'tailwind-merge'

import { backgrounds, colors, borderColors, shadows } from '../@utils'

import { ButtonProps } from './types'

export type ButtonRef = HTMLButtonElement

const stateStyles = 'disabled:grayscale disabled:opacity-50'

const sizes = {
	xs: 'text-xs p-1 border',
	sm: 'text-sm p-2 border-2',
	md: 'text-base p-3 border-4',
	lg: 'text-lg p-4 border-[6px]',
	xl: 'text-xl p-5 border-8',
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
		shadow = 'none',
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
	const sizeClasses = useMemo(() => sizes[size], [size])
	const backgroundClasses = useMemo(() => backgrounds[background], [background])
	const colorClasses = useMemo(() => colors[color], [color])
	const layoutClasses = useMemo(() => layouts[layout], [layout])
	const shadowClasses = useMemo(() => shadows[shadow], [shadow])
	const outlineStyles = useMemo(
		() => `border-solid ${borderColors[outlineColor]}`,
		[outlineColor]
	)
	const outlineClasses = useMemo(
		() => (outline ? outlineStyles : 'border-none'),
		[outline, outlineStyles]
	)

	return (
		<button
			className={twMerge(
				`button group flex gap-2 items-center justify-center group-[.flex-col]:justify-start scale-100 focus:text-accent ${sizeClasses} ${textcase} ${backgroundClasses} ${colorClasses} ${layoutClasses} ${outlineClasses} ${shadowClasses} ${stateStyles} ${
					isBold ? 'font-semibold' : 'font-normal'
				}`,
				className
			)}
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
