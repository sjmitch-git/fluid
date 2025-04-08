import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { FaUser } from 'react-icons/fa'
import { NavBar } from '..'
import { Button, Dialog, Tabs, Form, RegisterForm } from '../..'
import { LoginForm } from '../../form/stories/Form.stories'
import { Default as Register } from '../../form/stories/RegisterForm.stories'
import { NavBarProps } from '../types'

const codeExample = `<NavBar
  brand="My Brand"
  links={[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]}
  className="bg-blue-500"
/>`

const meta: Meta<typeof NavBar> = {
	title: 'Fluid UI/Menus/NavBar',
	component: NavBar,
	parameters: {
		docs: {
			description: {
				component: `
The **NavBar** component is a customizable navigation bar for your web application.

### Key Features:
- Supports dynamic links and brand text/logo.
- Customizable appearance via Tailwind classes or additional CSS.
- Includes link click callback support for handling navigation events.

### Import
\`\`\`tsx
import { NavBar } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<NavBar
  brand="My Brand"
  links={[
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]}
  className="bg-blue-500"
/>
\`\`\`
                `,
			},
			source: {
				code: codeExample,
			},
		},
	},
	/* argTypes: {
		brand: {
			description: 'The text or logo displayed as the brand.',
			control: 'text',
		},
		links: {
			description: 'Array of navigation links.',
			control: 'object',
		},
		navStyles: {
			description: 'Additional CSS classes for styling.',
			control: 'text',
		},
		onLinkClick: {
			action: 'link clicked',
			description: 'Callback function triggered on link click.',
		},
	}, */
	tags: ['autodocs'],
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof NavBar>

const NavBarComponent = (args: NavBarProps) => <NavBar {...args} />

export const Default: Story = {
	name: 'Basic',
	parameters: {
		docs: {
			source: {
				code: codeExample,
			},
		},
	},
	render: (args) => <NavBarComponent {...args} />,
	args: {
		brand: 'My Brand',
		brandSrc: '/brand.png',
		brandStyles: '',
		btnBackground: 'info',
		btnColor: 'light',
		btnLayout: 'square',
		btnSize: 'lg',
		links: [
			{ name: 'Home', href: '#' },
			{ name: 'About', href: '#' },
			{ name: 'Contact', href: '#' },
		],
		navStyles: '',
	},
}

Default.argTypes = {
	brand: {
		control: 'text',
	},
	links: {
		control: 'object',
	},
	navStyles: {
		control: 'text',
	},
}

export const WithLogin: Story = {
	parameters: {
		docs: {
			source: {
				code: codeExample,
			},
		},
	},
	render: (args) => <NavBarWithLogin {...args} />,
	args: {
		brand: 'My Brand',
		brandSrc: '/brand.png',
		brandStyles: '',
		btnBackground: 'info',
		btnColor: 'light',
		btnLayout: 'circle',
		btnSize: 'lg',
		links: [
			{ name: 'Home', href: '#' },
			{ name: 'About', href: '#' },
			{ name: 'Contact', href: '#' },
		],
		navStyles: '',
	},
}

const NavBarWithLogin = (args: NavBarProps) => {
	const [open, setOpen] = useState(false)
	const handleClose = () => setOpen(false)

	return (
		<NavBarComponent {...args}>
			<Button
				btnBackground={args.btnBackground}
				layout={args.btnLayout}
				size={args.btnSize}
				btnColor={args.btnColor}
				onClick={() => setOpen(!open)}
				title='Your Account'
			>
				<FaUser />
			</Button>
			<Dialog
				open={open}
				modal={true}
				title='Your Account'
				onClose={handleClose}
			>
				<Tabs
					tabSize='md'
					minimalTabs={true}
					contentBorder={false}
					defaultActiveId='tab1'
					className='px-0'
				>
					<div
						id='tab1'
						title='Log-in'
					>
						<div>
							<Form
								{...LoginForm.args}
								onCancel={handleClose}
								onsubmit={handleClose}
								className='px-4'
							/>
						</div>
					</div>
					<div
						id='tab2'
						title='Register'
					>
						<div>
							<RegisterForm
								{...Register.args}
								legendText='Register'
								userLabel='e-Mail'
								passwordLabel='Password'
								confirmLabel='Confirm'
								checkLabel='Terms & Conditions'
								onCancel={handleClose}
								onsubmit={handleClose}
								className='px-4'
							/>
						</div>
					</div>
				</Tabs>
			</Dialog>
		</NavBarComponent>
	)
}
