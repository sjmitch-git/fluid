'use client'

import React, { useState } from 'react'

import { Accordion, AccordionItem, Label, Input } from '@/ui'

import Dogs from '@/data/dogs.json'

const AccordionTemplate = () => {
	const [open, setOpen] = useState<string>('')
	const [selectedBrand, setSelectedBrand] = useState('')
	const [selectedColor, setSelectedColor] = useState('')
	const [selectedSize, setSelectedSize] = useState('')

	const test = (id: number) => {
		console.log('id', id)
	}

	return (
		<>
			<h2>Accordian Template</h2>

			<div className='mb-12'>
				<Accordion
					data={Dogs}
					icon='symbol'
					layout='flush'
					opened='1'
					size='md'
					theme='light'
				/>
			</div>

			{/* <div className='mb-12'>
				<Accordion
					icon='symbol'
					layout='flush'
					opened='1'
					size='md'
					theme='light'
				>
					<>
						<AccordionItem
							id='1'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Brand'
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
										onChange={() => setSelectedBrand('')}
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
										onChange={() => setSelectedBrand('adidas')}
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
										onChange={() => setSelectedBrand('nike')}
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
										onChange={() => setSelectedBrand('puma')}
									/>
								</Label>
							</div>
						</AccordionItem>
						<AccordionItem
							id='2'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Colour'
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
										onChange={() => setSelectedColor('')}
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
										onChange={() => setSelectedColor('white')}
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
										onChange={() => setSelectedColor('black')}
									/>
								</Label>
							</div>
						</AccordionItem>
						<AccordionItem
							id='3'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Size'
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
										onChange={() => setSelectedSize('')}
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
										onChange={() => setSelectedSize('7')}
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
										onChange={() => setSelectedSize('8')}
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
										onChange={() => setSelectedSize('8.5')}
									/>
								</Label>
							</div>
						</AccordionItem>
					</>
				</Accordion>
			</div> */}

			<div className='mb-12'>
				<Accordion
					icon='symbol'
					layout='spaced'
					opened='1'
					size='md'
					theme='dark'
				>
					<>
						<AccordionItem
							id='1'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Brand'
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
										onChange={() => setSelectedBrand('')}
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
										onChange={() => setSelectedBrand('adidas')}
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
										onChange={() => setSelectedBrand('nike')}
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
										onChange={() => setSelectedBrand('puma')}
									/>
								</Label>
							</div>
						</AccordionItem>
						<AccordionItem
							id='2'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Colour'
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
										onChange={() => setSelectedColor('')}
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
										onChange={() => setSelectedColor('white')}
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
										onChange={() => setSelectedColor('black')}
									/>
								</Label>
							</div>
						</AccordionItem>
						<AccordionItem
							id='3'
							layoutClasses='border border-x-0 border-t-0 last:border-b-0'
							open={open}
							setOpen={setOpen}
							themeClasses='bg-light text-dark border-neutral'
							title='Size'
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
										onChange={() => setSelectedSize('')}
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
										onChange={() => setSelectedSize('7')}
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
										onChange={() => setSelectedSize('8')}
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
										onChange={() => setSelectedSize('8.5')}
									/>
								</Label>
							</div>
						</AccordionItem>
					</>
				</Accordion>
			</div>
		</>
	)
}

export default AccordionTemplate
