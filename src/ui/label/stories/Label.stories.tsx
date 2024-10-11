/* import React, { useState } from 'react'
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
			layout='col'
			{...args}
		>
			<Input
				name='tel'
				type='tel'
				autocomplete='tel'
				title='Enter a vaild UK mobile number'
				pattern='^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$'
				placeholder='eg: 07111 222333'
				hint={true}
				required={args.required}
				size={args.size}
			/>
		</Label>
	),
}

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
 */

import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '..'
import { Input, Select } from '@/ui'
import { LabelProps } from '../types'

const textInputExample = `<Label label="Label:" layout="col">
  <Input type="text" name="name" placeholder="Placeholder Text" />
</Label>`

const emailInputExample = `<Label label="e-Mail:" layout="col" required>
  <Input
  	type='email'
	placeholder='Enter your email'
	required
	hint
	title='A valid e-mail address is required.'
	autocomplete='email'
  />
</Label>`

const passwordInputExample = `<Label label="Password:" layout="col" required>
  <Input
	type='password'
	name='password'
	autocomplete='current-password'
	pattern='(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'
	placeholder='Enter Password'
	hint
	title='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
	required
/>
</Label>`

const meta: Meta = {
	title: 'Fluid UI/Forms/Label',
	component: Label,
	parameters: {
		docs: {
			source: {
				code: textInputExample,
			},
			description: {
				component: `
The **Label** component wraps form elements like inputs, providing a label and layout options.

### Import
\`\`\`tsx
import { Label } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`tsx
// Text Input Example
${textInputExample}
\`\`\`

\`\`\`tsx
// Email Input Example
${emailInputExample}
\`\`\`

### Props:
- \`label\` (string): The label text for the form element.
- \`layout\` ('col' | 'row', optional): Layout direction of the label and form element. Defaults to \`col\`.
- \`required\` (boolean, optional): Marks the form element as required. Defaults to false.
- \`type\` ('text' | 'password' | 'number' | 'email' | 'tel' | 'date' | 'checkbox' | 'radio' | 'file' | 'button' | 'color' | 'range' | 'search' | 'url' | 'datetime-local' | 'time' | 'month' | 'week', optional): The type of form control associated with the label. Defaults to \`text\`.
- \`size\` ('sm' | 'md' | 'lg' | 'xl', optional): The size of the label.
- \`isBold\` (boolean, optional): If \`true\`, makes the label text bold. Defaults to \`true\`.
        `,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta

type Story = StoryObj<typeof Label>

const LabelComponent = (args: LabelProps) => <Label {...args}>{args.children}</Label>

export const Default: Story = {
	name: 'Text Input',
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='text'
				placeholder='Placeholder Text'
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		children: { table: { disable: true } },
		type: { table: { disable: true } },
		forId: { table: { disable: true } },
		value: { table: { disable: true } },
		onKeyUp: { table: { disable: true } },
		layout: {
			options: ['col', 'row'],
			control: { type: 'radio' },
		},
	},
	args: {
		label: 'Label:',
		layout: 'col',
		size: 'md',
		isBold: true,
	},
	decorators: [
		(Story) => (
			<div className='text-dark bg-light dark:text-light dark:bg-transparent p-4'>
				<Story />
			</div>
		),
	],
}

export const EmailInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${emailInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='email'
				name='email'
				placeholder='Enter your email'
				required={args.required}
				hint
				title='A valid e-mail address is required.'
				autocomplete='email'
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'e-Mail:',
		required: true,
	},
	decorators: [...(Default.decorators || [])],
}

const passwordPattern = '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}'

export const PasswordInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${passwordInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='password'
				name='password'
				autocomplete='current-password'
				pattern={passwordPattern}
				placeholder='Enter Password'
				hint
				title='Must contain at least one number and one uppercase and lowercase letter, and between 8 and 12 characters'
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Password:',
		required: true,
	},
	decorators: [...(Default.decorators || [])],
}

const checkboxInputExample = `<Label label='I agree to Terms & Conditions' type='checkbox' layout='row_reverse'>
	<Input
		name='terms'
		type='checkbox'
	/>
</Label>`

export const CheckboxInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${checkboxInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='checkbox'
				name='terms'
				hint={false}
				title={args.label?.toString()}
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		layout: { table: { disable: true } },
	},
	args: {
		...Default.args,
		label: 'I agree to Terms & Conditions',
		type: 'checkbox',
		layout: 'row_reverse',
		isBold: false,
	},
	decorators: [...(Default.decorators || [])],
}

const radioInputExample = `<Label label='18-64 years' type='radio' layout='row_reverse'>
	<Input
		name='age'
		type='radio'
		value='age'
	/>
</Label>`

export const RadioInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${radioInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='checkbox'
				name='terms'
				hint={false}
				title={args.label?.toString()}
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		layout: { table: { disable: true } },
	},
	args: {
		...Default.args,
		label: '18 - 64 years',
		type: 'radio',
		layout: 'row_reverse',
		isBold: false,
	},
	decorators: [...(Default.decorators || [])],
}

const colorInputExample = `<Label label='Set Color' type='color' layout='row_reverse'>
	<Input
		name='color'
		type='color'
		value='#FF00FF'
		onChange={handleChange}
	/>
</Label>`

export const ColorInput: Story = (args: LabelProps) => {
	const [value, setValue] = useState(args.value)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
	label: 'Set Colour',
	size: 'md',
	value: '#FF00FF',
}

ColorInput.parameters = {
	docs: {
		source: {
			code: `${colorInputExample}`,
		},
	},
}

const dataInputExample = `<Label label='Select Date:' type='date' layout='col'>
  <Input
  	type='date'
	name='date'
  />
</Label>`

interface TypeProps {
	type: 'date' | 'datetime-local' | 'time' | 'month' | 'week'
}

export const DatesAndTimeInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${dataInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type={args.type as TypeProps['type']}
				name='date'
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		type: {
			control: 'select',
			options: ['date', 'datetime-local', 'month', 'week', 'time'],
			table: {
				disable: false,
			},
		},
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		type: 'date',
		label: 'Enter Value:',
	},
	decorators: [...(Default.decorators || [])],
}

const urlInputExample = `<Label label='Blog Link:' type='url' layout='col'>
  <Input
  	type='url'
	name='url'
	hint
	title='Link to your blog, if you have one.'
	autocomplete='url'
  />
</Label>`

export const UrlInput: Story = {
	name: 'URL Input',
	parameters: {
		docs: {
			source: {
				code: `${urlInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				type='url'
				name='url'
				placeholder='HTTPS://'
				hint
				title='Link to your blog, if you have one.'
				autocomplete='url'
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Blog Link:',
		type: 'url',
	},
	decorators: [...(Default.decorators || [])],
}

const numberInputExample = `<Label label='Number:' type='number' layout='col'>
  <Input
  	name='number'
	type='number'
	value='1'
	min='1'
	max='9'
	hint
	title='Enter a value between 1 and 9'
	required
  />
</Label>`

export const NumberInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${numberInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				name='number'
				type='number'
				value='1'
				min='1'
				max='9'
				hint
				title='Enter a value between 1 and 9'
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Number:',
		type: 'number',
	},
	decorators: [...(Default.decorators || [])],
}

const telInputExample = `<Label label='Mobile:' type='tel' layout='col'>
  <Input
  	name='mobile'
	type='tel'
	hint
	autocomplete='tel'
	title='Enter a vaild UK mobile number'
	pattern='^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$'
	placeholder='eg: 07111 222333'
  />
</Label>`

export const TelephoneInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${telInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				name='mobile'
				type='tel'
				hint
				autocomplete='tel'
				title='Enter a vaild UK mobile number'
				pattern='^(+44s?7d{3}|(?07d{3})?)s?d{3}s?d{3}$'
				placeholder='eg: 07111 222333'
				required={args.required}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
	},
	args: {
		...Default.args,
		label: 'Mobile:',
		type: 'tel',
		required: false,
	},
	decorators: [...(Default.decorators || [])],
}

const searchInputExample = `<Label label='Search:' type='search' layout='row'>
  <Input
  	name='search'
	type='search'
	autocomplete='on'
  />
</Label>`

export const SearchInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${searchInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				name='search'
				type='search'
				autocomplete='on'
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Search:',
		type: 'search',
		layout: 'row',
	},
	decorators: [...(Default.decorators || [])],
}

const fileInputExample = `<Label label='Upload an image' type='file' layout='col'>
  <Input
  	label='Upload an image'
	name='file'
	type='file'
	accept='image/*'
  />
</Label>`

export const fileInput: Story = {
	parameters: {
		docs: {
			source: {
				code: `${fileInputExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Input
				size={args.size}
				name='file'
				type='file'
				accept='image/*'
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Upload an image',
		type: 'file',
		layout: 'col',
	},
	decorators: [...(Default.decorators || [])],
}

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

const selectDropdowntExample = `<Label label='Month:' size='md' layout='col'>
  <Select
	options={[
		{ value: '01', label: 'January' },
		{ value: '02', label: 'February' },
		{ value: '03', label: 'March' },
	]}
	name='months'
	dropdownSize='md'
/>
</Label>`

export const SelectDropdown: Story = {
	parameters: {
		docs: {
			source: {
				code: `${selectDropdowntExample}`,
			},
		},
	},
	render: (args) => (
		<LabelComponent {...args}>
			<Select
				options={months}
				name='months'
				required={args.required}
				dropdownSize={args.size}
			/>
		</LabelComponent>
	),
	argTypes: {
		...Default.argTypes,
		required: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		...Default.args,
		label: 'Month:',
		layout: 'col',
	},
	decorators: [...(Default.decorators || [])],
}
