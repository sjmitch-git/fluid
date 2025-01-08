'use client'

import { Icon } from 'leaflet'

export const setupDefaultIcon = () => {
	const markerIcon = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png'
	const markerIconRetina = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png'
	const markerShadow = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png'

	delete (Icon.Default.prototype as any)._getIconUrl
	Icon.Default.mergeOptions({
		iconRetinaUrl: markerIconRetina,
		iconUrl: markerIcon,
		shadowUrl: markerShadow,
	})
}
