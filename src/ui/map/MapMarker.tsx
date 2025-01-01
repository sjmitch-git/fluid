'use client'

import React, { useState, useEffect } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import UseCustomIcon from './CustomIcon'
import { MapMarkerProps } from './types'

const MapMarker = ({
	position,
	popupContent,
	iconName,
	iconId,
	iconSize,
	iconColor,
	draggable,
	onDragEnd,
}: MapMarkerProps) => {
	const [markerPosition, setMarkerPosition] = useState(position)
	const map = useMap()

	useEffect(() => {
		const handleDoubleClick = (e: L.LeafletMouseEvent) => {
			setMarkerPosition(e.latlng)
		}

		if (draggable) map.on('dblclick', handleDoubleClick)

		return () => {
			if (draggable) map.off('dblclick', handleDoubleClick)
		}
	}, [map, draggable])

	const icon = iconName
		? UseCustomIcon({ iconName, size: iconSize, color: iconColor })
		: iconId
			? UseCustomIcon({ iconId, size: iconSize, color: iconColor })
			: new L.Icon.Default()

	const handleDragEnd = (event: L.DragEndEvent) => {
		if (!draggable) return
		const marker = event.target
		const newPosition = marker.getLatLng()
		setMarkerPosition(newPosition)
		setTimeout(() => {
			map.setView(newPosition, map.getZoom() + 1)
		}, 500)
		if (onDragEnd) onDragEnd(newPosition)
	}

	return (
		<Marker
			position={markerPosition}
			icon={icon}
			draggable={draggable}
			eventHandlers={{
				dragend: handleDragEnd,
			}}
		>
			{popupContent ? (
				<Popup>{popupContent}</Popup>
			) : draggable ? (
				<Popup>
					{(() => {
						if (Array.isArray(markerPosition)) {
							return `Lat: ${markerPosition[0].toFixed(5)}, Lon: ${markerPosition[1].toFixed(5)}`
						} else if ('lat' in markerPosition && 'lng' in markerPosition) {
							return `Lat: ${markerPosition.lat.toFixed(5)}, Lon: ${markerPosition.lng.toFixed(5)}`
						}
						return 'Invalid position'
					})()}
				</Popup>
			) : null}
		</Marker>
	)
}

export default MapMarker
