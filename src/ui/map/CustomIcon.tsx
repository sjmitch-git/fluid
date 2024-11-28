import L from 'leaflet'

import { CustomIconProps } from './types'

const baseUrl = 'https://img.icons8.com/'

const UseCustomIcon = ({ iconName, iconId, size = 40, color }: CustomIconProps): L.Icon => {
	const colorPath = color ? `${color}` : ''

	const queryParams = new URLSearchParams({
		size: size.toString(),
		id: iconId || 'oStMNsdYhXTS',
		format: 'png',
		color: color || '000000',
	})

	let iconUrl = ''

	iconName
		? (iconUrl = `${baseUrl}${colorPath}/${size}/${iconName}.png`)
		: (iconUrl = `${baseUrl}?${queryParams.toString()}`)

	return new L.Icon({
		iconUrl,
		iconSize: [size, size],
		iconAnchor: [size / 2, size],
		popupAnchor: [0, -size / 2],
	})
}

export default UseCustomIcon
