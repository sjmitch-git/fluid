import type { Meta, StoryObj } from '@storybook/react'
import { Blockquote } from '..'

const meta: Meta = {
	title: 'Fluid UI/Typography/Blockquote',
	component: Blockquote,
	parameters: {
		docs: {
			description: {
				component: `The **Blockquote** component is used to highlight text, typically quotations from people or important passages. It supports customization for font size, optional author attribution, and citation links. This component is fully responsive and adjusts seamlessly between light and dark modes.

### Key Features:
- **Customizable Size**: Adjust the font size of the blockquote for better readability.
- **Optional Author and Citation**: Display an author's name and a citation link in the footer.
- **Text Alignment**: Align the footer (author name) to the left or right.
- **Responsive Design**: Automatically adjusts styles for light and dark modes.

### Import:
\`\`\`tsx
import { Blockquote } from '@smitch/fluid'
\`\`\`

### Usage Example:
\`\`\`tsx
<Blockquote
  text="Nothing compares to the simple pleasure of riding a bike."
  author="John F. Kennedy"
  cite="https://www.famousquotes.com/quote-author/john-fitzgerald-kennedy/"
  footerAlign="right"
  size="lg"
/>
\`\`\`
`,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Blockquote>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		text: 'Nothing compares to the simple pleasure of riding a bike.',
		author: 'John F. Kennedy',
		cite: 'https://www.famousquotes.com/quote-author/john-fitzgerald-kennedy/',
		footerAlign: 'right',
		size: 'md',
	},
}
