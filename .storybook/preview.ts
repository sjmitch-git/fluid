import type { Preview } from '@storybook/react'

import '../src/styles/index.css'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		viewport: {
			defaultViewport: 'mobile2',
			defaultOrientation: 'portrait',
		},
		backgrounds: {
			default: 'grey',
			values: [
				{
					name: 'light',
					value: '#ffffff',
				},
				{
					name: 'grey',
					value: '#cccccc',
				},
				{
					name: 'dark',
					value: '#111111',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
