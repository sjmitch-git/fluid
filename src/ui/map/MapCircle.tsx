import React from 'react'
import { Circle, Popup } from 'react-leaflet'
import { MapCircleProps } from './types'

const MapCircle = ({ position, radius, fill, stroke, popupContent }: MapCircleProps) => {
	return (
		<Circle
			center={position}
			radius={radius}
			fillColor={fill}
			stroke={stroke}
		>
			{popupContent && <Popup>{popupContent}</Popup>}
		</Circle>
	)
}

export default MapCircle
