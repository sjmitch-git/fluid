'use client'

import { FaPinterestP } from 'react-icons/fa'
import { Button } from '../..'
import { XButtonProps } from '../types'

const PinterestButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const baseUrl = 'https://pinterest.com/pin/create/button/'
		const params = new URLSearchParams({
			description: text.replace(/(\r\n|\n|\r)/g, ' '),
			url: window.location.href,
		})

		const shareUrl = `${baseUrl}?${params.toString()}`
		window.open(shareUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='danger'
			btnColor='light'
			hoverScale
			layout={btnShape}
			size={size}
			title='Share on Pinterest'
			className='focus:border-danger focus-visible:outline-danger bg-[#E60023]'
		>
			<FaPinterestP />
			<span className='sr-only'>Share on Pinterest</span>
		</Button>
	)
}

export default PinterestButton
