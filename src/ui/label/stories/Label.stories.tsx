import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '..'
import { Input, Select } from '@/ui'
import { LabelProps } from '../types'

const meta: Meta = {
	title: 'Fluid UI/Forms/Label',
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
		onKeyUp: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'

export const Default: Story = {
	name: 'Text Input',
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='text'
				name='name'
				autocomplete='on'
				placeholder='Placeholder Text'
				title='Some helpful information for the user'
				size={args.size}
				hint={true}
				required={args.required}
			/>
		</Label>
	),
	args: {
		size: 'md',
		layout: 'col',
		required: false,
		label: 'Label:',
	},
}

export const EmailInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'e-Mail:',
		required: true,
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='email'
				name='email'
				autocomplete='email'
				placeholder='Enter your e-mail'
				title='Enter a valid e-mail address'
				required={args.required}
				size={args.size}
				hint={true}
			/>
		</Label>
	),
}

export const PasswordInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Password:',
		required: true,
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='password'
				name='password'
				autocomplete='current-password'
				pattern={passwordPattern}
				placeholder='Enter Password'
				hint={true}
				title='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const CheckboxInput: Story = {
	argTypes: {
		...Default.argTypes,
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'I agree to Terms & Conditions',
		type: 'checkbox',
		layout: 'row_reverse',
		className: 'font-normal',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='terms'
				type='checkbox'
				value='terms'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const RadioInput: Story = {
	argTypes: {
		...Default.argTypes,
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: '18 - 64 years',
		type: 'radio',
		layout: 'row_reverse',
		className: 'font-normal',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='age'
				type='radio'
				value='age'
				size={args.size}
			/>
		</Label>
	),
}

export const ColorInput: Story = (args: LabelProps) => {
	const [value, setValue] = useState(args.value)

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
				size={args.size}
				value={value}
				onChange={handleChange}
			/>
		</Label>
	)
}

ColorInput.args = {
	type: 'color',
	layout: 'row_reverse',
	className: 'font-normal',
	label: 'Set Colour',
	size: 'md',
	value: '#FF00FF',
}

ColorInput.argTypes = {
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
}

export const DateInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Select Date:',
		type: 'date',
		layout: 'col',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='date'
				name='date'
				size={args.size}
				required={args.required}
			/>
		</Label>
	),
}

export const DatetimeLocalInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Date & Time:',
		type: 'datetime-local',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='datetime-local'
				name='datetime-local'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const TimeInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Select Time:',
		type: 'time',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='time'
				name='time'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const WeekInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Select Week:',
		type: 'week',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='week'
				name='week'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const MonthInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Select Month:',
		type: 'month',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				type='month'
				name='month'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const UrlInput: Story = {
	name: 'URL Input',
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'URL:',
		type: 'url',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='url'
				placeholder='https://'
				type='url'
				autocomplete='on'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const NumberInput: Story = {
	argTypes: {
		...Default.argTypes,
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Number',
		type: 'number',
		layout: 'col',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='number'
				type='number'
				value='1'
				min='1'
				max='9'
				hint={true}
				title='Enter a value between 1 and 9'
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

export const FileInput: Story = {
	argTypes: {
		...Default.argTypes,
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
		...Default.args,
		label: 'Upload a file',
		type: 'file',
		layout: 'col',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='file'
				type='file'
				accept='image/*'
				size={args.size}
			/>
		</Label>
	),
}

export const SearchInput: Story = {
	argTypes: {
		...Default.argTypes,
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
		...Default.args,
		label: 'Search',
		type: 'search',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='search'
				type='search'
				autocomplete='on'
				size={args.size}
			/>
		</Label>
	),
}

export const TelInput: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Tel:',
		type: 'tel',
		layout: 'row',
		required: true,
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Input
				name='tel'
				type='tel'
				autocomplete='tel'
				title='Enter a vaild UK mobile number'
				pattern='07[0-9]{9}'
				placeholder='eg: 07111 222333'
				hint={true}
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

/* export const RangeInput: Story = (args: LabelProps) => {
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
				size={args.size}
			/>
		</Label>
	)
}

RangeInput.args = {
	label: 'Range',
	type: 'range',
	layout: 'col',
	size: 'md',
}

RangeInput.argTypes = {
	required: {
		table: {
			disable: true,
		},
	},
} */

const months = [
	{ value: '01', label: 'January' },
	{ value: '02', label: 'February' },
	{ value: '03', label: 'March' },
	{ value: '04', label: 'April' },
	{ value: '05', label: 'May' },
	{ value: '06', label: 'June' },
	{ value: '07', label: 'July' },
	{ value: '08', label: 'August' },
	{ value: '09', label: 'September' },
	{ value: '10', label: 'October' },
	{ value: '11', label: 'November' },
	{ value: '12', label: 'December' },
]

export const SelectDropdown: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Month:',
	},
	render: (args) => (
		<Label
			label={args.label}
			{...args}
		>
			<Select
				options={months}
				name='months'
				className='border-neutral'
				required={args.required}
				dropdownSize={args.size}
				rounded='md'
			/>
		</Label>
	),
}
