import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '..'

const meta: Meta = {
	title: 'Fluid UI/Inputs/Switch',
	component: Switch,
	parameters: {
		docs: {
			description: {
				component: `
The **Switch** component is a customizable toggle switch that allows users to switch between two states (e.g., on and off). It is designed with flexibility in mind, supporting various shapes, colors, and label sizes for enhanced UI integration.

### Key Features:
- **Customizable Shape**: Choose between 'circle' or 'square' shapes to fit the design aesthetic.
- **Color Variants**: Multiple color options, such as 'info', 'success', 'warning', 'danger', and more, for different states.
- **Optional Thin Design**: A thin version of the switch is available for a more compact appearance.
- **Label Customization**: Supports different label sizes ('base', 'lg', 'xl') and the option to make labels bold.
- **Hint Display**: Optionally show a hint text below the switch for additional user guidance.
- **Accessibility**: The switch can be marked as \`required\`, and it includes standard input attributes for seamless integration.

### Import:
\`\`\`jsx
import { Switch } from '@smitch/fluid-ui';
\`\`\`

### Example Usage:
\`\`\`jsx
<Switch
    label="Enable Notifications"
    labelSize="lg"
    switchColor="primary"
    shape="circle"
    onChange={(e) => console.log('Toggled:', e.target.checked)}
    showHint={true}
    hint="This will enable notifications for updates."
/>
\`\`\`
      `,
			},
		},
	},

	tags: ['autodocs'],
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
		checked: {
			table: {
				disable: true,
			},
		},
		defaultChecked: {
			table: {
				disable: true,
			},
		},
		onChange: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	console.log('onChange event', { event })
}

export const Default: Story = {
	name: 'Switch',
	args: {
		shape: 'circle',
		switchColor: 'info',
		thin: false,
		label: 'Switch Label',
		labelSize: 'base',
		labelIsBold: true,
		hint: 'Some helpful info for the user',
		showHint: false,
		required: false,
		onChange: handleChange,
		disabled: false,
	},
}
