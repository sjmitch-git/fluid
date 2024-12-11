import React from 'react'
import type { Preview } from '@storybook/react'

import '../src/styles/index.css'

const preview: Preview = {
	globalTypes: {
		darkMode: {
			defaultValue: false,
		},
		className: {
			defaultValue: 'dark',
		},
	},
	decorators: [
		(Story) => (
			<div className='preview-decorator bg-white dark:bg-dark text-dark dark:text-light p-4'>
				<Story />
			</div>
		),
	],
	parameters: {
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
		/* design: {
			type: 'figma',
			url: 'https://www.figma.com/file/SQOHzbPMKkZg0XgdnWGXl5',
		}, */
	},
}

export default preview
