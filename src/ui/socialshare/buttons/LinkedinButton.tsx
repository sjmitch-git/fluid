'use client'

import { FaLinkedin } from 'react-icons/fa'
import { Button } from '../..'
import { LinkedInButtonProps } from '../types'

const LinkedInButton = ({ btnShape, size }: LinkedInButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://www.linkedin.com/sharing/share-offsite/'
		const shareUrl = new URL(baseUrl)

		shareUrl.searchParams.set('url', window.location.href)

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
			title='Share on LinkedIn'
			className='focus:border-info focus-visible:outline-info bg-[#0077B5]'
		>
			<FaLinkedin />
			<span className='sr-only'>Share on LinkedIn</span>
		</Button>
	)
}

export default LinkedInButton
