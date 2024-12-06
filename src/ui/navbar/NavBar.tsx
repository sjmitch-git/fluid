'use client'

import React from 'react'
import { twMerge } from 'tailwind-merge'
import NavLinks from './NavLinks'
import NavBrand from './NavBrand'
import { NavBarProps } from './types'

const NavBar = ({
	brand,
	brandSrc,
	brandStyles = '',
	links,
	btnBackground,
	btnColor,
	btnLayout,
	btnSize,
	children,
	className,
	onLinkClick,
}: NavBarProps) => {
	return (
		<nav
			className={twMerge(
				`bg-gray-400 shadow-lg fixed top-0 left-0 w-full z-10 flex justify-between items-center px-4 py-2`,
				className
			)}
		>
			{brand ? (
				<NavBrand
					brand={brand}
					src={brandSrc}
					className={brandStyles}
				/>
			) : (
				<div></div>
			)}
			<div className='flex flex-row-reverse lg:flex-row items-center gap-4'>
				<NavLinks
					links={links}
					btnBackground={btnBackground}
					btnColor={btnColor}
					btnLayout={btnLayout}
					btnSize={btnSize}
					onLinkClick={onLinkClick}
				/>
				{children}
			</div>
		</nav>
	)
}

export default NavBar
