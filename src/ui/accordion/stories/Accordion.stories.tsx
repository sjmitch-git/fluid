import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '..'
import { AccordionItem, Label, Input } from '@/ui'
import { AccordionProps } from '../types'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Menus/Accordion',
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
	},
}

Default.argTypes = {
	opened: {
		table: {
			disable: true,
		},
	},
}

export const Custom: Story = (args: AccordionProps) => {
	const [open, setOpen] = useState('')
	const [selectedBrand, setSelectedBrand] = useState('')
	const [selectedColor, setSelectedColor] = useState('')
	const [selectedSize, setSelectedSize] = useState('')

	const layouts = {
		default: 'mb-0 border border-t-0 first:border-t',
		flush: 'border border-x-0 border-t-0 last:border-b-0',
		spaced: 'mb-2 last:mb-0 border',
	}

	const layoutClasses = layouts[args.layout || 'default']

	return (
		<Accordion {...args}>
			<>
				<AccordionItem
					id='1'
					layoutClasses={`${layoutClasses}`}
					open={open}
					setOpen={setOpen}
					title='Brand'
					icon={args.icon}
				>
					<div className='p-4 flex flex-col gap-4'>
						<Label
							className='font-normal'
							label='Any'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='brand'
								type='radio'
								value=''
								size={args.size}
								checked={selectedBrand === ''}
								onChange={() => setSelectedBrand('')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='Adidas'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='brand'
								type='radio'
								value='adidas'
								size={args.size}
								checked={selectedBrand === 'adidas'}
								onChange={() => setSelectedBrand('adidas')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='Nike'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='brand'
								type='radio'
								value='nike'
								size={args.size}
								checked={selectedBrand === 'nike'}
								onChange={() => setSelectedBrand('nike')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='Puma'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='brand'
								type='radio'
								value='puma'
								size={args.size}
								checked={selectedBrand === 'puma'}
								onChange={() => setSelectedBrand('puma')}
							/>
						</Label>
					</div>
				</AccordionItem>
				<AccordionItem
					id='2'
					layoutClasses={`${layoutClasses}`}
					open={open}
					setOpen={setOpen}
					title='Colour'
					icon={args.icon}
				>
					<div className='p-4 flex flex-col gap-4'>
						<Label
							className='font-normal'
							label='Any'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='color'
								type='radio'
								value=''
								size={args.size}
								checked={selectedColor === ''}
								onChange={() => setSelectedColor('')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='White'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='color'
								type='radio'
								value='white'
								size={args.size}
								checked={selectedColor === 'white'}
								onChange={() => setSelectedColor('white')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='Black'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='color'
								type='radio'
								value='black'
								size={args.size}
								checked={selectedColor === 'black'}
								onChange={() => setSelectedColor('black')}
							/>
						</Label>
					</div>
				</AccordionItem>
				<AccordionItem
					id='3'
					layoutClasses={`${layoutClasses}`}
					open={open}
					setOpen={setOpen}
					title='Size'
					icon={args.icon}
				>
					<div className='p-4 flex flex-col gap-4'>
						<Label
							className='font-normal'
							label='Any'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='size'
								type='radio'
								value=''
								size={args.size}
								checked={selectedSize === ''}
								onChange={() => setSelectedSize('')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='UK 7 - EU 41'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='size'
								type='radio'
								value='7'
								size={args.size}
								checked={selectedSize === '7'}
								onChange={() => setSelectedSize('7')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='UK 8 - EU 42'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='size'
								type='radio'
								value='8'
								size={args.size}
								checked={selectedSize === '8'}
								onChange={() => setSelectedSize('8')}
							/>
						</Label>
						<Label
							className='font-normal'
							label='UK 8.5 - EU 43'
							layout='row_reverse'
							size={args.size}
							type='radio'
						>
							<Input
								name='size'
								type='radio'
								value='8.5'
								size={args.size}
								checked={selectedSize === '8.5'}
								onChange={() => setSelectedSize('8.5')}
							/>
						</Label>
					</div>
				</AccordionItem>
			</>
		</Accordion>
	)
}

Custom.args = {
	icon: 'symbol',
	layout: 'default',
	size: 'md',
}

Custom.argTypes = {
	data: {
		table: {
			disable: true,
		},
	},
	opened: {
		table: {
			disable: true,
		},
	},
}

export const RTL: Story = {
	args: {
		...Default.args,
	},
	argTypes: {
		...Default.argTypes,
	},
}

RTL.decorators = [
	(Story) => (
		<div dir='rtl'>
			<Story />
		</div>
	),
]
