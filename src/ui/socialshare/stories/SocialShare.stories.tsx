import type { Meta, StoryObj } from '@storybook/react'
import { SocialShare } from '..'

const meta: Meta<typeof SocialShare> = {
	title: 'Fluid UI/Social/SocialShare',
	component: SocialShare,
	tags: ['autodocs'],
	args: {
		text: 'Check out this awesome site!',
		buttons: [
			'X',
			'Facebook',
			'LinkedIn',
			'Slack',
			'WhatsApp',
			'Reddit',
			'Pinterest',
			'Telegram',
			'Email',
		],
		btnShape: 'circle',
		size: 'lg',
		gap: 'sm',
		layout: 'vertical',
		grayscale: false,
		className: '',
		style: {},
	},
	parameters: {
		docs: {
			description: {
				component: `
The **SocialShare** component displays a row or column of social sharing buttons.
You can control which buttons appear, their order, shape, and spacing.

### Example Usage:
\`\`\`jsx
<SocialShare
  text="Check out this awesome site!"
  buttons={['X', 'Facebook', 'LinkedIn', 'Slack', 'WhatsApp']}
  btnShape="circle"
  gap="md"
  layout="horizontal"
/>
\`\`\`
`,
			},
		},
	},
}
export default meta
type Story = StoryObj<typeof SocialShare>

export const Default: Story = {}
