'use client'

import React, { useCallback, useState, useMemo } from 'react'

import { twMerge } from 'tailwind-merge'

import { Loading } from '..'
import { TwitterEmbedProps } from './types'

declare global {
	interface Window {
		twttr?: {
			widgets: {
				load: (element: HTMLElement) => void
			}
			events: {
				bind: (event: string, callback: () => void) => void
			}
		}
	}
}

export const TwitterEmbed = ({
	handle,
	lang = 'en',
	status,
	theme,
	header = false,
	borders = false,
	transparent = false,
	scrollbars = false,
	height,
	className = '',
	style,
}: TwitterEmbedProps) => {
	const [loading, setLoading] = useState(true)

	const chrome = useMemo(() => {
		return `${!header ? 'noheader' : ''} ${!borders ? 'noborders' : ''} ${
			transparent ? 'transparent' : ''
		} ${!scrollbars ? 'noscrollbars' : ''}`
	}, [header, borders, transparent, scrollbars])

	const embedRef = useCallback((embedRefNode: any) => {
		if (embedRefNode) {
			if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
				const script = document.createElement('script')
				script.src = 'https://platform.twitter.com/widgets.js'
				script.defer = true
				script.onload = () => {
					if (window.twttr) {
						window.twttr.widgets.load(embedRefNode)
						window.twttr.events.bind('rendered', () => {
							setLoading(false)
						})
					} else {
						setLoading(false)
					}
				}
				script.onerror = () => {
					setLoading(false)
				}

				document.body.appendChild(script)
			} else {
				if (window.twttr) {
					window.twttr.widgets.load(embedRefNode)
					window.twttr.events.bind('rendered', () => {
						setLoading(false)
					})
				} else {
					setLoading(false)
				}
			}
		}
	}, [])

	return (
		<div
			className={twMerge(
				`twitter-wrap flex flex-col justify-center w-full max-w-lg`,
				className
			)}
			style={style}
		>
			{loading && (
				<div className='loading-spinner py-8 text-info flex w-full justify-center mb-8'>
					<Loading
						loadingColor='info'
						size='md'
						spinner='dots'
						caption='Loading'
					/>
				</div>
			)}
			<div
				ref={embedRef}
				className='flex flex-col justify-center'
			>
				{status ? (
					<>
						<blockquote
							className='twitter-tweet mx-auto'
							data-theme={theme}
							data-lang={lang}
							data-chrome={chrome}
						>
							<a href={`https://twitter.com/${handle}/status/${status}`}>@{handle}</a>
						</blockquote>
					</>
				) : (
					<a
						className='twitter-timeline p-4 mx-auto'
						href={`https://twitter.com/${handle}`}
						data-chrome={chrome}
						data-theme={theme}
						data-lang={lang}
						data-height={height}
					>
						Tweets from @{handle}
					</a>
				)}
			</div>
		</div>
	)
}

export default TwitterEmbed
