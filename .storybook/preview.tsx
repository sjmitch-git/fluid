import { useEffect } from 'react'

declare global {
	interface Window {
		gtag: (...args: any[]) => void
	}
}

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
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		viewport: {
			defaultViewport: 'mobile1',
		},
		/* design: {
			type: 'figma',
			url: 'https://www.figma.com/file/SQOHzbPMKkZg0XgdnWGXl5',
		}, */
	},
	decorators: [
		(Story, context) => {
			useEffect(() => {
				window.gtag('config', 'G-JKVR4XLTMW', {
					page_path: window.location.pathname + window.location.search,
				})
			}, [context.id])
			return (
				<div className='preview-decorator bg-light dark:bg-dark text-dark dark:text-light p-4'>
					<Story />
				</div>
			)
		},
	],
}

export default preview
