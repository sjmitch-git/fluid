import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '..'
import { Input, Autocomplete } from '@/ui'

import data from '@/data/countries.json'

const meta: Meta = {
	title: 'Fluid UI/Label',
	component: Label,
	argTypes: {
		required: {
			options: [false, true],
			control: { type: 'radio' },
		},
		children: {
			table: {
				disable: true,
			},
		},
		type: {
			table: {
				disable: true,
			},
		},
		value: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		size: 'md',
		layout: 'col',
		required: false,
		label: 'Label',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	argTypes: {
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Name:',
		hint: 'Some helpful information for the user',
		children: (
			<Input
				type='text'
				name='name'
				autocomplete='name'
			/>
		),
	},
}

export const WithEMail: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'e-Mail:',
		hint: 'Enter a vaild e-mail address',
		children: (
			<Input
				type='email'
				name='email'
				autocomplete='email'
			/>
		),
	},
}

export const WithPassword: Story = {
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: 'Password',
		layout: 'col',
		required: true,
		type: 'password',
		hint: 'Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters',
		children: (
			<Input
				type='password'
				name='password'
				autocomplete='current-password'
				pattern='(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
			/>
		),
	},
}

export const WithCheckbox: Story = {
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: 'I agree to the Terms and Conditions',
		type: 'checkbox',
		layout: 'inline',
		hint: 'Some message relating to terms and condiftions',
		className: 'font-normal',
		children: (
			<Input
				name='terms'
				type='checkbox'
				value='terms'
			/>
		),
	},
}

export const WithRadio: Story = {
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: '18 - 64 years',
		type: 'radio',
		layout: 'inline',
		className: 'font-normal',
		children: (
			<Input
				name='age'
				type='radio'
				value='age'
			/>
		),
	},
}

export const WithColor: Story = {
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: 'Select Colour',
		type: 'color',
		layout: 'inline',
		className: 'font-normal',
		children: (
			<Input
				type='color'
				name='color'
			/>
		),
	},
}

export const WithDate: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Select Date',
		type: 'data',
		layout: 'col',
		children: (
			<Input
				type='date'
				name='date'
			/>
		),
	},
}

export const WithDatetimeLocal: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Date & Time',
		type: 'datetime-local',
		layout: 'col',
		children: (
			<Input
				type='datetime-local'
				name='datetime-local'
			/>
		),
	},
}

export const WithTime: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Select Time',
		type: 'time',
		layout: 'col',
		children: (
			<Input
				type='time'
				name='time'
			/>
		),
	},
}

export const WithWeek: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Select Week',
		type: 'week',
		layout: 'col',
		children: (
			<Input
				type='week'
				name='time'
			/>
		),
	},
}

export const WithMonth: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Select Month',
		type: 'month',
		layout: 'col',
		children: (
			<Input
				type='month'
				name='month'
			/>
		),
	},
}

export const WithURL: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		label: 'Blog',
		type: 'url',
		layout: 'col',
		children: (
			<Input
				name='blog'
				placeholder='https://'
				type='url'
			/>
		),
	},
}

export const WithNumber: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: 'Number',
		type: 'number',
		layout: 'inline',
		children: (
			<Input
				name='number'
				type='number'
				value='1'
				min='1'
				max='9'
			/>
		),
	},
}

export const WithFile: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		label: 'Upload a file',
		type: 'file',
		layout: 'col',
		children: (
			<Input
				name='file'
				type='file'
				accept='image/*'
			/>
		),
	},
}

export const WithSearch: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Search',
		type: 'search',
		layout: 'inline',
		children: (
			<Input
				name='search'
				type='search'
			/>
		),
	},
}

export const WithTelephone: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Telephone',
		type: 'tel',
		layout: 'col',
		children: (
			<Input
				name='tel'
				type='tel'
				autocomplete='tel'
			/>
		),
	},
}

export const WithRange: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Range',
		type: 'range',
		layout: 'col',
		children: (
			<Input
				name='range'
				type='range'
				min='0'
				max='100'
				step='1'
			/>
		),
	},
}

export const WithAutocomplete: Story = {
	argTypes: {
		required: {
			table: {
				disable: true,
			},
		},
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Autocomplete',
		type: 'text',
		layout: 'col',
		children: (
			<Autocomplete
				data={data}
				list='countries'
				placeholder='Select Country'
			/>
		),
	},
}
