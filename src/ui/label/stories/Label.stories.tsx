import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '..'
import { Input, Autocomplete } from '@/ui'
import { LabelProps } from '../types'

import data from '@/data/countries.json'

const meta: Meta = {
	title: 'Fluid UI/Label',
	component: Label,
	argTypes: {
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
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
		forId: {
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

const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'

export const Default: Story = {
	args: {
		label: 'Label:',
		size: 'md',
		children: (
			<Input
				type='text'
				name='name'
				autocomplete='on'
				placeholder='Placeholder Text'
				title='Some helpful information for the user'
				hint={true}
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
		required: true,
		children: (
			<Input
				type='email'
				name='email'
				autocomplete='email'
				placeholder='Enter your e-mail'
				title='Enter a vaild e-mail address'
				required={true}
				hint={true}
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

		children: (
			<Input
				type='password'
				name='password'
				required={true}
				autocomplete='current-password'
				pattern={passwordPattern}
				placeholder='Enter Password'
				hint={true}
				title='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
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
		layout: 'row_reverse',

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
		layout: 'row_reverse',
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

export const WithColor: Story = (args: LabelProps) => {
	const [value, setValue] = useState('#000000')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('event', event.target.value)
		setValue(event.target.value)
	}

	return (
		<Label
			{...args}
			label={`${args.label}: ${value}`}
		>
			<Input
				type='color'
				name='color'
				onChange={handleChange}
			/>
		</Label>
	)
}

WithColor.args = {
	type: 'color',
	layout: 'row_reverse',
	className: 'font-normal',
	label: 'Set Colour',
}

WithColor.argTypes = {
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
	label: {
		table: {
			disable: true,
		},
	},
	className: {
		table: {
			disable: true,
		},
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
				size='md'
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
		layout: 'row_reverse',
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
		layout: 'row_reverse',
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
		label: 'Country of residence',
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

export const WithRange: Story = (args: LabelProps) => {
	const [value, setValue] = useState(50)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setValue(Number(newValue))
	}

	return (
		<Label {...args}>
			<Input
				name='range'
				type='range'
				value={50}
				min='0'
				max='100'
				step='1'
				hint={true}
				title={`Current value: ${value}`}
				onChange={handleChange}
				onInput={handleChange}
			/>
		</Label>
	)
}

WithRange.args = {
	label: 'Range',
	type: 'range',
	layout: 'col',
}
