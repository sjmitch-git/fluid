import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '..'

const meta: Meta = {
	title: 'Fluid UI/Forms/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		name: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Checkbox',
	args: {
		label: 'I accept',
		hint: (
			<>
				I agree to the{' '}
				<a
					href='/terms'
					rel='noopener noreferrer'
				>
					Terms
				</a>{' '}
				&amp;
				<a
					href='/conditions'
					rel='noopener noreferrer'
				>
					{' '}
					Conditions
				</a>
				. You can read our privacy policy{' '}
				<a
					href='/privacy'
					rel='noopener noreferrer'
				>
					here
				</a>
				.
			</>
		),
		required: false,
	},
}
