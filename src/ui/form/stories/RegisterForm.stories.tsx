import type { Meta, StoryObj } from '@storybook/react'
import { RegisterForm } from '..'

const handleSubmit = (data: { [key: string]: string }) => {
	console.log('form data', data)
}

const handleCancel = () => {
	console.log('Cancel')
}

const meta: Meta<typeof RegisterForm> = {
	title: 'Fluid UI/Forms/Form/Register Form',
	component: RegisterForm,
	tags: ['autodocs'],
	argTypes: {
		onsubmit: {
			table: {
				disable: true,
			},
		},
		onCancel: {
			table: {
				disable: true,
			},
		},
		action: {
			table: {
				disable: true,
			},
		},
		actions: {
			table: {
				disable: true,
			},
		},
		name: {
			table: {
				disable: true,
			},
		},
		checkHint: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		// form
		onsubmit: handleSubmit,
		onCancel: handleCancel,

		// fieldset
		spacing: '8',
		hasBorder: false,

		// legend
		legendText: 'Register',
		legendisBold: true,
		legendAlign: 'center',
		legendSize: 'xl',

		// actions
		actionsLayout: 'row',
		actionsSpacing: '0',
		submitLabel: 'Register',
		cancelLabel: 'Cancel',
		submitBackground: 'primary',
		submitColor: 'light',
		cancelBackground: 'transparent',
		cancelColor: 'current',
		submitOutlineColor: 'current',
		cancelOutlineColor: 'current',
		showCancel: true,
		buttonShape: 'default',
		buttonTextcase: 'normal-case',
		buttonIsBold: true,
		buttonOutline: false,
		separator: true,

		// user input
		userLabel: 'e-Mail',
		userAutocomplete: 'email',
		userPlaceholder: 'Your e-Mail address',

		// password input
		passwordLabel: 'Password',
		passwordPlaceholder: 'Create new password',
		passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}',
		passwordTitle:
			'Password must be 8-12 characters long, include at least one digit, one uppercase letter, and one symbol.',

		// confirm password
		confirmLabel: 'Confirm',
		confirmPlaceholder: 'Same as new password',
		confirmTitle: 'Password must be the same as your new password.',

		// generic input
		inputsLayout: 'col',
		inputsSize: 'md',
		inputsRounded: 'md',

		// checkbox
		checkLabel: 'Terms & Conditions',
		checkLabelIsBold: true,
		checkRounded: 'none',
		checkHint: (
			<>
				Click if you agree to the{' '}
				<a
					href='#'
					rel='noopener noreferrer'
				>
					Terms
				</a>{' '}
				&amp;
				<a
					href='#'
					rel='noopener noreferrer'
				>
					{' '}
					Conditions
				</a>
				. <br />
				You can read our privacy policy{' '}
				<a
					href='#'
					rel='noopener noreferrer'
				>
					here
				</a>
				.
			</>
		),
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		// form
		onsubmit: handleSubmit,
		onCancel: handleCancel,

		// fieldset
		spacing: '8',
		hasBorder: false,

		// legend
		legendText: 'Register',
		legendisBold: true,
		legendAlign: 'center',
		legendSize: 'xl',

		// actions
		actionsLayout: 'row',
		actionsSpacing: '0',
		submitLabel: 'Register',
		cancelLabel: 'Cancel',
		submitBackground: 'primary',
		submitColor: 'light',
		cancelBackground: 'transparent',
		cancelColor: 'current',
		submitOutlineColor: 'current',
		cancelOutlineColor: 'current',
		showCancel: true,
		buttonShape: 'default',
		buttonTextcase: 'normal-case',
		buttonIsBold: true,
		buttonOutline: false,
		separator: true,

		// user input
		userLabel: 'e-Mail',
		userAutocomplete: 'email',
		userPlaceholder: 'Your e-Mail address',

		// password input
		passwordLabel: 'Password',
		passwordPlaceholder: 'Create new password',
		passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}',
		passwordTitle:
			'Password must be 8-12 characters long, include at least one digit, one uppercase letter, and one symbol.',

		// confirm password
		confirmLabel: 'Confirm',
		confirmPlaceholder: 'Same as new password',
		confirmTitle: 'Password must be the same as your new password.',

		// generic input
		inputsLayout: 'col',
		inputsSize: 'md',
		inputsRounded: 'md',

		// checkbox
		checkLabel: 'Terms & Conditions',
		checkLabelIsBold: true,
		checkRounded: 'none',
		checkHint: (
			<>
				Click if you agree to the{' '}
				<a
					href='#'
					rel='noopener noreferrer'
				>
					Terms
				</a>{' '}
				&amp;
				<a
					href='#'
					rel='noopener noreferrer'
				>
					{' '}
					Conditions
				</a>
				. <br />
				You can read our privacy policy{' '}
				<a
					href='#'
					rel='noopener noreferrer'
				>
					here
				</a>
				.
			</>
		),
	},
}
