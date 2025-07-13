'use client'

import { MdEmail } from 'react-icons/md'
import { Button } from '../..'
import { XButtonProps } from '../types'

const EmailButton = ({ text, btnShape, size }: XButtonProps) => {
	const handleShareClick = () => {
		const subject = encodeURIComponent(document.title)
		const body = encodeURIComponent(`${text}\n\n${window.location.href}`)
		const mailtoUrl = `mailto:?subject=${subject}&body=${body}`
		window.open(mailtoUrl, '_blank', 'noopener,noreferrer')
	}

	return (
		<Button
			onClick={handleShareClick}
			btnBackground='info'
			btnColor='light'
			hoverScale
			layout={btnShape}
			size={size}
			title='Share via Email'
			className='focus:border-info focus-visible:outline-info bg-[#0072C6]'
		>
			<MdEmail />
			<span className='sr-only'>Share via Email</span>
		</Button>
	)
}

export default EmailButton
