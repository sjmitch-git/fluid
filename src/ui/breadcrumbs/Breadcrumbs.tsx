'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { BreadcrumbsProps } from './types'

const defaultStyles = 'breadcrumbs group mx-auto w-full text-dark dark:text-light'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
}

const separators = {
	slash: 'before:content-["/"]',
	arrow: 'before:content-[">"]',
	pipe: 'before:content-["|"]',
	dot: 'before:content-["•"]',
}

const Breadcrumbs = ({
	className,
	size = 'md',
	homeLabel = 'Home',
	separator = 'slash',
}: BreadcrumbsProps) => {
	let sizeClasses = sizes[size]
	let separartorContent = separators[separator]

	const pathname = usePathname()
	let paths: string[] = []
	if (pathname) paths = pathname.split('/')

	const buildHref = (path: string) => {
		for (let i = 0; i < paths.length; i++) {
			if (i === paths.length - 1) break

			if (paths[1] === path) {
				return '/' + path
			} else if (paths[2] === path) {
				return '/' + paths[1] + '/' + path
			}
		}
		return ''
	}

	const displayPath = (path: string) => {
		return path.replaceAll('_', ' ')
	}

	if (paths && paths.length === 2 && paths[paths.length - 1] === '')
		paths.length = paths.length - 1

	return pathname === '/' ? (
		<nav></nav>
	) : (
		<nav
			className={`${defaultStyles} ${sizeClasses} ${className ? className : ''}`}
			aria-label='breadcrumb'
			data-testid='breadcrumbs'
		>
			<ol className='flex flex-col md:flex-row'>
				{paths.map((path, index) => (
					<li
						key={index}
						className={`breadcrumb ps-4 capitalize first:ps-0 before:inline-block ${separartorContent} rtl:before:scale-x-[-1] first:before:content-none before:pe-3 rtl:before:pe-0 rtl:before:ps-3   ${
							index === paths.length - 1 ? 'active' : ''
						}`}
						aria-current={index === paths.length - 1 ? 'page' : false}
					>
						{index === 0 ? (
							paths.length === 1 ? (
								`${homeLabel}`
							) : (
								<Link href='/'>{homeLabel}</Link>
							)
						) : index === paths.length - 1 ? (
							displayPath(path)
						) : (
							<Link href={buildHref(path)}>{displayPath(path)}</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
