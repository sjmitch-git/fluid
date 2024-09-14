import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from '..'

const meta: Meta = {
	title: 'Fluid UI/Forms/Text Input',
	component: TextInput,
	tags: ['autodocs'],
} satisfies Meta<typeof TextInput>

export default meta
type Story = StoryObj<typeof meta>

const onInputChange = (value: string) => {
	console.log('onInputChange', value)
}

export const Default: Story = {
	argTypes: {
		className: {
			table: {
				disable: true,
			},
		},
		value: {
			table: {
				disable: true,
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		id: {
			table: {
				disable: true,
			},
		},
		onInputChange: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		onInputChange: onInputChange,
		label: 'Label',
		layout: 'col',
		size: 'md',
		title: 'Some helpful info for the user',
		hint: true,
		type: 'text',
		inputStyles: 'border-neutral',
		autocomplete: 'off',
		placeholder: 'Some placeholder text',
		rounded: 'md',
	},
}

export const TypeText: Story = {
	argTypes: {
		...Default.argTypes,
		type: {
			table: {
				disable: true,
			},
		},
		autocomplete: {
			options: [
				'off',
				'on',
				'name',
				'given-name',
				'family-name',
				'username',
				'street-address',
				'address-line1',
				'address-level2',
				'address-level1',
				'country',
				'country-name',
				'postal-code',
				'cc-name',
				'cc-given-name',
				'cc-family-name',
			],
			control: { type: 'select' },
		},
	},
	args: {
		...Default.args,
		type: 'text',
		label: 'Name:',
		title: 'Enter your name',
		hint: false,
		required: true,
		autocomplete: 'name',
		placeholder: 'Your Name',
	},
}

export const TypeEMail: Story = {
	argTypes: {
		...Default.argTypes,
		type: {
			table: {
				disable: true,
			},
		},
		autocomplete: {
			options: ['email', 'username email'],
			control: { type: 'select' },
		},
	},
	args: {
		...Default.args,
		type: 'email',
		name: 'email',
		label: 'e-Mail:',
		title: 'Enter a valid e-Mail address',
		required: true,
		autocomplete: 'email',
		placeholder: 'name@email.com',
	},
}

export const TypeTel: Story = {
	argTypes: {
		...Default.argTypes,
		type: {
			table: {
				disable: true,
			},
		},
		autocomplete: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		name: 'tel',
		type: 'tel',
		label: 'Mobile Number:',
		title: 'Enter a vaild UK mobile number',
		pattern: '07[0-9]{9}',
		required: false,
		autocomplete: 'tel',
		placeholder: 'eg: 07111 222333',
	},
}

export const TypeURL: Story = {
	argTypes: {
		...Default.argTypes,
		type: {
			options: ['date', 'username email'],
			control: { type: 'select' },
		},
		autocomplete: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		name: 'blog',
		type: 'url',
		label: 'Blog:',
		title: 'Enter a link to your blog',
		required: false,
		autocomplete: 'off',
		placeholder: 'https://myblog.com',
	},
}
