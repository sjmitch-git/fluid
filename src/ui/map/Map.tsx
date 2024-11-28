import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import { MapContainer, TileLayer, LayersControl, useMap, GeoJSON } from 'react-leaflet'
import { FullscreenControl } from 'react-leaflet-fullscreen'
import 'react-leaflet-fullscreen/styles.css'
import { tileOptions as defaultTileOptions } from './tileOptions'
import { MapProps } from './types'

interface ClickHandlerProps {
	onDblClick?: (position: { lat: number; lng: number }) => void
	dragging?: boolean
}

const { BaseLayer } = LayersControl

const ClickHandler = ({ onDblClick, dragging }: ClickHandlerProps) => {
	if (!dragging) return

	const map = useMap()

	useEffect(() => {
		const handleDoubleClick = (e: L.LeafletMouseEvent) => {
			setTimeout(() => {
				map.setView(e.latlng, map.getZoom())
			}, 500)

			if (onDblClick) {
				onDblClick(e.latlng)
			}
		}

		map.on('dblclick', handleDoubleClick)

		return () => {
			map.off('dblclick', handleDoubleClick)
		}
	}, [map, onDblClick])

	return null
}

const Map = ({
	center,
	bounds,
	zoom,
	dragging = true,
	geojson,
	layerColor = 'white',
	layerFillColor = 'blue',
	onDblClick,
	className,
	style,
	tileIndex = 0,
	customTiles = [],
	children,
}: MapProps) => {
	const mapRef = useRef<L.Map | null>(null)
	const tileOptions = [...defaultTileOptions, ...customTiles]

	const zoomToFeature = (e: L.LeafletMouseEvent) => {
		const layer = e.target as L.Layer
		if (mapRef.current) {
			if ('getBounds' in layer && typeof layer.getBounds === 'function') {
				const bounds = layer.getBounds()
				mapRef.current.fitBounds(bounds)
			} else if ('getLatLng' in layer && typeof layer.getLatLng === 'function') {
				const latLng = layer.getLatLng()
				mapRef.current.setView(latLng, mapRef.current.getZoom())
			}
		}
	}

	const handleEachFeature = (feature: any, layer: any) => {
		if (feature.properties) {
			const popupContent = Object.entries(feature.properties)
				.map(([key, value]) => {
					return key === 'name'
						? `<strong>${value}</strong>`
						: `<em>${key}:</em> ${value}`
				})
				.join('<br>')

			layer.bindPopup(popupContent)
		}

		const defaultStyle = {
			color: feature.properties.color || layerColor,
			weight: 1,
			opacity: 1,
			fillOpacity: 0.3,
			fillColor: feature.properties.fillColor || layerFillColor,
			dashArray: '3',
		}

		const hoverStyle = {
			fillOpacity: 0.7,
		}

		layer.setStyle(defaultStyle)

		layer.on({
			click: zoomToFeature,
			mouseover: (e: L.LeafletMouseEvent) => {
				layer.setStyle(hoverStyle)
			},
			mouseout: () => {
				layer.setStyle(defaultStyle)
			},
		})
	}

	return (
		<MapContainer
			center={center}
			bounds={bounds}
			zoom={zoom}
			dragging={dragging}
			className={className}
			style={style}
			ref={(ref) => {
				if (ref) {
					mapRef.current = ref
				}
			}}
		>
			<>
				<LayersControl position='topright'>
					{tileOptions &&
						tileOptions.map((tile, index) => (
							<BaseLayer
								key={index}
								name={tile.name}
								checked={index === tileIndex}
							>
								<TileLayer
									url={tile.url}
									attribution={tile.attribution}
									{...(tile.subdomains && { subdomains: tile.subdomains })}
								/>
							</BaseLayer>
						))}
				</LayersControl>
				<FullscreenControl position='topleft' />
				<ClickHandler
					onDblClick={onDblClick}
					dragging={dragging}
				/>
				{geojson && (
					<GeoJSON
						data={geojson}
						onEachFeature={handleEachFeature}
					/>
				)}
				{children}
			</>
		</MapContainer>
	)
}

export default Map
