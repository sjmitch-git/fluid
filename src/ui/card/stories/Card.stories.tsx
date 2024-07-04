import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardImage, CardFooter } from '@/ui'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Card',
	component: Card,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		layout: 'col',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const data = Data[0]

export const Default: Story = {
	args: {
		children: (
			<>
				<CardImage
					title={data.name}
					src={data.src}
					aspect='landscape'
				/>

				<CardBody>
					<CardHeader title={data.name} />
					<p className='line-clamp-2'>{data.description}</p>
					<CardFooter
						link={data.link}
						linkLabel={data.name}
					/>
				</CardBody>
			</>
		),
	},
}

export const NoImage: Story = {
	argTypes: {
		layout: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: (
			<>
				<CardBody>
					<CardHeader title={data.name} />
					<p>{data.description}</p>
					<CardFooter
						link={data.link}
						linkLabel={data.name}
					/>
				</CardBody>
			</>
		),
	},
}

export const ImageSquareAspect: Story = {
	args: {
		children: (
			<>
				<CardImage
					title={data.name}
					src={data.src}
					aspect='square'
				/>

				<CardBody>
					<CardHeader title={data.name} />
					<p className='line-clamp-2'>{data.description}</p>
					<CardFooter
						link={data.link}
						linkLabel={data.name}
					/>
				</CardBody>
			</>
		),
	},
}

export const ImageVideoAspect: Story = {
	args: {
		children: (
			<>
				<CardImage
					title={data.name}
					src={data.src}
					aspect='video'
				/>

				<CardBody>
					<CardHeader title={data.name} />
					<p className='line-clamp-2'>{data.description}</p>
					<CardFooter
						link={data.link}
						linkLabel={data.name}
					/>
				</CardBody>
			</>
		),
	},
}

export const ImagePortraitAspect: Story = {
	args: {
		children: (
			<>
				<CardImage
					title={data.name}
					src={data.src}
					aspect='portrait'
				/>

				<CardBody>
					<CardHeader title={data.name} />
					<p className='line-clamp-2'>{data.description}</p>
					<CardFooter
						link={data.link}
						linkLabel={data.name}
					/>
				</CardBody>
			</>
		),
	},
}
