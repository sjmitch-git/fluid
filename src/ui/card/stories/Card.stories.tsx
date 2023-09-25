import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardImage, CardFooter } from '@/ui'

// import * as HeaderStories from './CardHeader.stories'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'UI/Card',
	component: Card,
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
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

export const CardTheme: Story = {
	args: {
		...Default.args,
		theme: 'light',
	},
}

export const CardLayout: Story = {
	args: {
		...Default.args,
		layout: 'row',
	},
}

export const CardWithoutImage: Story = {
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
