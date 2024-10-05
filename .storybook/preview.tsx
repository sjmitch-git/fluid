import React from 'react'
import { Decorator } from '@storybook/react'
import { useEffect } from '@storybook/client-api'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

import '../src/styles/index.css'

export const decorators: Preview['decorators'] = [
	(Story) => {
		useEffect(() => {
			let canonicalLink: HTMLLinkElement | null =
				document.querySelector("link[rel='canonical']")
			if (!canonicalLink) {
				canonicalLink = document.createElement('link')
				canonicalLink.setAttribute('rel', 'canonical')
				document.head.appendChild(canonicalLink)
			}
			canonicalLink.setAttribute('href', window.location.href)
		}, [])

		return <Story />
	},
]

const withGlobalStyles: Decorator = (Story, context) => {
	React.useEffect(() => {
		const style = document.createElement('style')
		style.innerHTML = `
      .sb-main-padded {
        padding: 0 !important;
      }
	  #storybook-root {
	   min-height: 100vh;
	   background: #f5f5f5;
	  }
	  #storybook-root.dark {
	   background: #111111;
	  }
    `
		document.head.appendChild(style)
	})

	return <Story {...context} />
}

const preview: Preview = {
	decorators: [
		(Story) => (
			<div
				style={{ padding: '1rem' }}
				className='bg-[#f5f5f5] dark:bg-[#111111] text-dark dark:text-light'
			>
				<Story />
			</div>
		),
		withGlobalStyles,
	],
	globalTypes: {
		darkMode: {
			defaultValue: true,
		},
	},
	parameters: {
		docs: {
			theme: themes.dark,
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
		viewport: {
			defaultViewport: 'mobile1',
			defaultOrientation: 'portrait',
		},
		backgrounds: { disable: true },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
