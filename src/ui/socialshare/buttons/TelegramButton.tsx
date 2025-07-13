'use client'

import { FaTelegramPlane } from 'react-icons/fa'
import { Button } from '../..'
import { XButtonProps } from '../types'

const TelegramButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://t.me/share/url'
		const params = new URLSearchParams({
			url: window.location.href,
			text: text.replace(/(\r\n|\n|\r)/g, ' '),
		})

		const shareUrl = `${baseUrl}?${params.toString()}`
		window.open(shareUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='info'
			btnColor='light'
			hoverScale
			layout={btnShape}
			size={size}
			title='Share on Telegram'
			className='focus:border-info focus-visible:outline-info bg-[#229ED9]'
		>
			<FaTelegramPlane />
			<span className='sr-only'>Share on Telegram</span>
		</Button>
	)
}

export default TelegramButton
