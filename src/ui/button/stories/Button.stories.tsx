import type { Meta, StoryObj } from '@storybook/react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { Button } from '..'

const meta: Meta = {
	title: 'Fluid UI/Buttons/Button',
	component: Button,
	args: {
		layout: 'default',
		textcase: 'capitalize',
		isBold: false,
		background: 'primary',
		color: 'light',
		size: 'lg',
		outline: false,
		outlineColor: 'secondary',
		shadow: 'none',
		disabled: false,
	},
	argTypes: {
		disabled: {
			options: [false, true],
			control: { type: 'radio' },
		},
		outline: {
			options: [false, true],
			control: { type: 'radio' },
		},
		role: {
			table: {
				disable: true,
			},
		},
		tabindex: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		type: {
			table: {
				disable: true,
			},
		},
		title: {
			table: {
				disable: true,
			},
		},
		onClick: {
			table: {
				disable: true,
			},
		},
		onBlur: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **Button** component provides a customizable button for various use cases. It supports different sizes, layouts, colors, and behaviors, making it a versatile component for any UI.

### Key Features:
- **Flexible Layouts**: Supports layouts like \`default\`, \`rounded\`, \`pill\`, \`circle\`, and more.
- **Customizable Styles**: Allows control over background color, text color, outline, and shadows.
- **Size Options**: Available in \`xs\`, \`sm\`, \`md\`, \`lg\`, and \`xl\`.
- **State Management**: Supports disabled state and different behaviors based on user interaction.
- **Icon Support**: You can use icons alongside or instead of text.

### Import:
\`\`\`tsx
import { Button } from '@smitch/fluid'
\`\`\`

### Usage Example:
\`\`\`tsx
<Button
  size="lg"
  background="primary"
  color="light"
  layout="pill"
  isBold={true}
  onClick={() => alert('Button clicked!')}
>
  Click Me!
</Button>
\`\`\`

### Props:

- \`size\` (string, optional): Defines the size of the button. Options: \`'xs'\`, \`'sm'\`, \`'md'\`, \`'lg'\`, \`'xl'\`. Defaults to \`'md'\`.
- \`background\` (string, optional): Sets the background color of the button. Options: \`'primary'\`, \`'secondary'\`, \`'light'\`, etc.
- \`color\` (string, optional): Sets the text color of the button. Options: \`'light'\`, \`'dark'\`, \`'danger'\`, etc.
- \`layout\` (string, optional): Controls the button's layout. Options: \`'default'\`, \`'rounded'\`, \`'pill'\`, \`'circle'\`, etc.
- \`outline\` (boolean, optional): Whether the button should have an outline. Defaults to \`false\`.
- \`outlineColor\` (string, optional): Specifies the color of the outline if \`outline\` is true. Defaults to \`'current'\`.
- \`shadow\` (string, optional): Adds shadow effects to the button. Options: \`'none'\`, \`'sm'\`, \`'md'\`, \`'lg'\`.
- \`isBold\` (boolean, optional): If true, the button text is bold. Defaults to \`false\`.
- \`onClick\` (function, optional): Function to handle button click events.

        `,
			},
		},
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Text',
	args: {
		children: 'Click!',
	},
}

export const Icon: Story = {
	argTypes: {
		textcase: {
			table: {
				disable: true,
			},
		},
		isBold: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: (
			<>
				<FaPlus />
				<span className='sr-only'>Add Item</span>
			</>
		),
		layout: 'circle',
	},
}

export const TextAndIcon: Story = {
	args: {
		children: (
			<>
				<FaPlus />
				Add Item
			</>
		),
		layout: 'pill',
	},
}

export const DeleteButton: Story = {
	args: {
		children: (
			<>
				<FaTrashAlt />
				<span className='sr-only'>Delete Item</span>
			</>
		),
		layout: 'circle',
		background: 'warning',
		color: 'danger',
		outline: false,
		title: 'Delete Item?',
	},
}
