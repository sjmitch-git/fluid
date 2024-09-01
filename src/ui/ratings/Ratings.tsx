import { round } from '@smitch/js-lib'
import { Badge } from '@/ui'

import {
	FaStar,
	FaThumbsUp,
	FaFaceSmile,
	FaHeart,
	FaEuroSign,
	FaYenSign,
	FaDollarSign,
	FaSterlingSign,
	FaCheck,
} from 'react-icons/fa6'

import { RatingsProps } from './types'

const Ratings = ({
	className = '',
	rating,
	range,
	icon = 'star',
	spacing = '0',
	shape = 'circle',
	size = 'md',
	background = 'info',
	color = 'light',
}: RatingsProps) => {
	rating = round(rating)
	if (rating === 0) rating = 1
	if (!range) range = rating
	return (
		<div
			className={`relative flex gap-${spacing} ${className}`}
			title={`Rating: ${rating} out of ${range}`}
		>
			{[...new Array(range)].map((_el, index) => (
				<Badge
					layout={shape}
					size={size}
					background={background}
					color={`${rating <= index ? 'neutral' : color}`}
					key={index}
				>
					{icon === 'smiley' ? (
						<FaFaceSmile />
					) : icon === 'thumb' ? (
						<FaThumbsUp />
					) : icon === 'heart' ? (
						<FaHeart />
					) : icon === 'pound' ? (
						<FaSterlingSign />
					) : icon === 'dollar' ? (
						<FaDollarSign />
					) : icon === 'yen' ? (
						<FaYenSign />
					) : icon === 'euro' ? (
						<FaEuroSign />
					) : icon === 'check' ? (
						<FaCheck />
					) : (
						<FaStar />
					)}
				</Badge>
			))}
			<p className='sr-only'>{`Rating: ${rating} out of ${range}`}</p>
		</div>
	)
}

export default Ratings
