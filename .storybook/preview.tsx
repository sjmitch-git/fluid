import React from 'react'
import type { Preview } from '@storybook/react'

import '../src/styles/index.css'

const preview: Preview = {
	decorators: [
		(Story) => (
			<div className='preview-decorator'>
				<Story />
			</div>
		),
	],
	parameters: {
		docs: {
			theme: 'dark',
		},
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
		darkMode: {
			current: 'dark',
			stylePreview: true,
		},
	},
}

export default preview
