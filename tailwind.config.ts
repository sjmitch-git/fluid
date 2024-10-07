import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.indigo[600],
					dark: colors.indigo[300],
				},
				secondary: {
					DEFAULT: colors.gray[600],
					dark: colors.gray[300],
				},
				accent: {
					DEFAULT: colors.orange[500],
					dark: colors.orange[300],
				},
				neutral: colors.gray[400],
				dark: colors.gray[900],
				light: colors.gray[100],
				info: {
					DEFAULT: colors.sky[400],
					dark: colors.sky[200],
				},
				success: {
					DEFAULT: colors.green[600],
					dark: colors.green[400],
				},
				warning: {
					DEFAULT: colors.amber[500],
					dark: colors.amber[300],
				},
				error: {
					DEFAULT: colors.red[600],
					dark: colors.red[400],
				},
				danger: {
					DEFAULT: colors.red[600],
					dark: colors.red[400],
				},
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
