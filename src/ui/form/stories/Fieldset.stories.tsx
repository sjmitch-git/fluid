import type { Meta, StoryObj } from '@storybook/react'
import { Fieldset } from '..'
import { TextInput } from '@/ui'

const meta: Meta = {
	title: 'Fluid UI/Forms/Fieldset',
	component: Fieldset,
	parameters: {
		docs: {
			description: {
				component:
					'The Fieldset component is used to group related form elements, providing a semantic wrapper for better accessibility and organization. It includes an optional legend to describe the content of the fieldset, configurable through props like legendText, legendAlign, and legendSize. The component also supports optional styles, such as making the legend text bold (isBold), and adjusting spacing between child elements (spacing). Additionally, the disabled prop can be used to disable all the form elements inside the fieldset.',
			},
			source: {
				code: `import { Fieldset } from '@/ui'

const ExampleForm = () => {
  return (
    <form>
      <Fieldset
        legendText="Contact Details"
        legendAlign="center"
        legendSize="lg"
        hasBorder={true}
        isBold={true}
        spacing="4"
      >
        {children form elements}
      </Fieldset>
    </form>
  );
};

export default ExampleForm;
`,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

const onInputChange = (value: string) => {
	console.log('onInputChange', value)
}

const defaultContent = () => {
	return (
		<>
			<TextInput
				label='First Name'
				autocomplete='given-name'
				layout='row'
				onInputChange={onInputChange}
				placeholder='Your first name'
				required
				name='given-name'
				id='given-name'
			/>
			<TextInput
				label='Last Name'
				autocomplete='family-name'
				layout='row'
				onInputChange={onInputChange}
				placeholder='Your last name'
				required
				name='family-name'
				id='family-name'
			/>
			<TextInput
				label='e-Mail'
				type='email'
				autocomplete='email'
				layout='row'
				onInputChange={onInputChange}
				name='email'
				id='email'
				placeholder='Your e-Mail'
				title='Enter a valid e-mail address'
				hint
				required
			/>
			<TextInput
				name='telNo'
				id='telNo'
				label='Mobile No'
				autocomplete='tel'
				layout='row'
				onInputChange={onInputChange}
				placeholder='eg: 07123456789'
				title='Enter a vaild UK mobile number'
				hint
				pattern='07[0-9]{9}'
			/>
		</>
	)
}

export const Default: Story = {
	name: 'Fieldset',
	args: {
		legendText: 'Contact Details',
		legendSize: 'xl',
		hasBorder: true,
		isBold: true,
		legendAlign: 'center',
		spacing: '4',
		children: defaultContent(),
	},
}
