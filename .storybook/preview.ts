import type { Preview } from '@storybook/react'

import '../src/styles/index.css'

/* import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
}); */

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview
