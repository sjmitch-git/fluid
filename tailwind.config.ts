import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: [
		{
			pattern: /(bg|text|border)-(warning|error|dark|light|primary|info)/,
		},
		{
			pattern: /aspect-(square|landscape|portrait|video)/,
		},
		{
			pattern: /flex-(col|row)/,
		},
	],
	theme: {
		extend: {
			aspectRatio: {
				landscape: '4 / 3',
				portrait: '3 / 4',
			},
			fontSize: {
				inherit: 'inherit',
			},
			lineHeight: {
				inherit: 'inherit',
			},
			colors: {
				primary: 'var(--primary-color)',
				secondary: 'var(--secondary-color)',
				accent: 'var(--accent-color)',
				tertiary: 'var(--tertiary-color)',
				neutral: 'var(--neutral-color)',
				dark: 'var(--dark-color)',
				light: 'var(--light-color)',
				info: 'var(--info-color)',
				success: 'var(--success-color)',
				warning: 'var(--warning-color)',
				error: 'var(--error-color)',
				danger: 'var(--error-color)',
				current: 'currentColor',
				transparent: 'transparent',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
	],
}
export default config
