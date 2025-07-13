'use client'

import { FaFacebook } from 'react-icons/fa'
import { Button } from '../..'
import { FacebookButtonProps } from '../types'

const FacebookButton = ({ btnShape, size }: FacebookButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://www.facebook.com/sharer/sharer.php'
		const shareUrl = new URL(baseUrl)

		shareUrl.searchParams.set('u', window.location.href)

		window.open(shareUrl.toString(), '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='primary'
			btnColor='light'
			hoverScale
			layout={btnShape}
			size={size}
			title='Share on Facebook'
			className='focus:border-info focus-visible:outline-info bg-[#1877F2]'
		>
			<FaFacebook />
			<span className='sr-only'>Share on Facebook</span>
		</Button>
	)
}

export default FacebookButton
