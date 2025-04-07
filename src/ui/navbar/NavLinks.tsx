import React, { useState } from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Button } from '..'
import { NavLinkProps } from './types'

const NavLinks = ({
	links,
	btnBackground = 'transparent',
	btnColor = 'light',
	btnLayout = 'square',
	btnSize = 'md',
	onLinkClick,
}: NavLinkProps) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<div>
			<Button
				btnBackground={btnBackground}
				btnColor={btnColor}
				size={btnSize}
				layout={btnLayout}
				title='Menu'
				className='lg:hidden focus:outline-none'
				onClick={() => setIsMobileMenuOpen((prev) => !prev)}
				suppressHydrationWarning={true}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					className='w-[1em] h-[1em]'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</Button>
			<div
				className={twMerge(
					'flex gap-4 lg:flex-row lg:static lg:top-auto lg:bg-transparent lg:w-auto lg:h-auto',
					isMobileMenuOpen
						? 'absolute top-full left-0 dark:bg-white bg-dark w-full flex-col h-auto py-4 shadow-lg'
						: 'hidden lg:flex'
				)}
			>
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className='navbar-link text-light dark:text-dark lg:text-light dark:lg:text-light px-4 py-0 lg:px-2 lg:py-0 lg:text-xl'
						onClick={() => {
							setIsMobileMenuOpen(false)
							onLinkClick?.(link.name)
						}}
					>
						{link.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default NavLinks
