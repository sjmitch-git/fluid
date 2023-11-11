import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem } from '..'
import { Input, Label } from '@/ui'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Accordion',
	component: Accordion,
	tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		data: Data,
		icon: 'symbol',
		layout: 'flush',
		opened: '1',
		size: 'md',
		theme: 'light',
	},
}
const test = () => {
	console.log('')
}
export const Custom: Story = {
	args: {
		icon: 'symbol',
		layout: 'flush',
		opened: '1',
		size: 'md',
		theme: 'light',
		children: (
			<>
				<AccordionItem
					id='1'
					title='Brand'
					layoutClasses='border border-x-0 border-t-0 last:border-b-0'
					themeClasses='bg-light text-dark border-neutral'
					open='1'
					setOpen={test}
				>
					<div className='p-4 flex flex-col gap-2'>
						<Label
							className='font-normal'
							label='Adidas'
							layout='inline'
							size='md'
							type='checkbox'
						>
							<Input
								name='brand'
								type='checkbox'
								value='adidas'
							/>
						</Label>
						<Label
							className='font-normal'
							label='Nike'
							layout='inline'
							size='md'
							type='checkbox'
						>
							<Input
								name='brand'
								type='checkbox'
								value='nike'
							/>
						</Label>
						<Label
							className='font-normal'
							label='Puma'
							layout='inline'
							size='md'
							type='checkbox'
						>
							<Input
								name='brand'
								type='checkbox'
								value='puma'
							/>
						</Label>
					</div>
				</AccordionItem>
				<AccordionItem
					id='2'
					title='Colour'
					layoutClasses='border border-x-0 border-t-0 last:border-b-0'
					themeClasses='bg-light text-dark border-neutral'
					open='1'
					setOpen={test}
				>
					<p>Some test content</p>
				</AccordionItem>
				<AccordionItem
					id='3'
					title='Size'
					layoutClasses='border border-x-0 border-t-0 last:border-b-0'
					themeClasses='bg-light text-dark border-neutral'
					open='1'
					setOpen={test}
				>
					<p>Some test content</p>
				</AccordionItem>
			</>
		),
	},
}
