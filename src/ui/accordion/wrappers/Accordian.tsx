import React, { useState } from 'react'
import { AccordionItem, Label, Input } from '@/ui'
import { AccordionProps } from '../types'

const layouts = {
	default: 'mb-0 border border-t-0 first:border-t',
	flush: 'border border-x-0 border-t-0 last:border-b-0',
	spaced: 'mb-2 border',
}

const themes = {
	light: 'bg-light text-dark border-neutral',
	dark: 'bg-dark text-light border-neutral',
	transparent: 'bg-transparent text-current border-neutral',
}

const AccordionWrapper = ({ icon, theme = 'light', layout = 'default' }: AccordionProps) => {
	const [open, setOpen] = useState('')
	const [selectedBrand, setSelectedBrand] = useState('')
	const [selectedColor, setSelectedColor] = useState('')
	const [selectedSize, setSelectedSize] = useState('')

	const themeClasses = themes[theme]
	const layoutClasses = layouts[layout]

	return (
		<>
			<AccordionItem
				id='1'
				layoutClasses={`${layoutClasses}`}
				open={open}
				setOpen={setOpen}
				themeClasses={`${themeClasses}`}
				title='Brand'
				icon={icon}
			>
				<div className='p-4 flex flex-col gap-2'>
					<Label
						className='font-normal'
						label='Any'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='brand'
							type='radio'
							value=''
							checked={selectedBrand === ''}
							onchange={() => setSelectedBrand('')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='Adidas'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='brand'
							type='radio'
							value='adidas'
							checked={selectedBrand === 'adidas'}
							onchange={() => setSelectedBrand('adidas')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='Nike'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='brand'
							type='radio'
							value='nike'
							checked={selectedBrand === 'nike'}
							onchange={() => setSelectedBrand('nike')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='Puma'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='brand'
							type='radio'
							value='puma'
							checked={selectedBrand === 'puma'}
							onchange={() => setSelectedBrand('puma')}
						/>
					</Label>
				</div>
			</AccordionItem>
			<AccordionItem
				id='2'
				layoutClasses={`${layoutClasses}`}
				open={open}
				setOpen={setOpen}
				themeClasses={`${themeClasses}`}
				title='Colour'
				icon={icon}
			>
				<div className='p-4 flex flex-col gap-2'>
					<Label
						className='font-normal'
						label='Any'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='color'
							type='radio'
							value=''
							checked={selectedColor === ''}
							onchange={() => setSelectedColor('')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='White'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='color'
							type='radio'
							value='white'
							checked={selectedColor === 'white'}
							onchange={() => setSelectedColor('white')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='Black'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='color'
							type='radio'
							value='black'
							checked={selectedColor === 'black'}
							onchange={() => setSelectedColor('black')}
						/>
					</Label>
				</div>
			</AccordionItem>
			<AccordionItem
				id='3'
				layoutClasses={`${layoutClasses}`}
				open={open}
				setOpen={setOpen}
				themeClasses={`${themeClasses}`}
				title='Size'
				icon={icon}
			>
				<div className='p-4 flex flex-col gap-2'>
					<Label
						className='font-normal'
						label='Any'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='size'
							type='radio'
							value=''
							checked={selectedSize === ''}
							onchange={() => setSelectedSize('')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='UK 7 - EU 41'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='size'
							type='radio'
							value='7'
							checked={selectedSize === '7'}
							onchange={() => setSelectedSize('7')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='UK 8 - EU 42'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='size'
							type='radio'
							value='8'
							checked={selectedSize === '8'}
							onchange={() => setSelectedSize('8')}
						/>
					</Label>
					<Label
						className='font-normal'
						label='UK 8.5 - EU 43'
						layout='inline'
						size='md'
						type='radio'
					>
						<Input
							name='size'
							type='radio'
							value='8.5'
							checked={selectedSize === '8.5'}
							onchange={() => setSelectedSize('8.5')}
						/>
					</Label>
				</div>
			</AccordionItem>
		</>
	)
}

export default AccordionWrapper
