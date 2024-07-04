import path from 'path'

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

	addons: [
		'storybook-tailwind-dark-mode',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		'storybook-addon-pseudo-states',
		'@storybook/addon-a11y',
	],

	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@': path.resolve(__dirname, '../src'),
			}
		}

		return config
	},
}
export default config
