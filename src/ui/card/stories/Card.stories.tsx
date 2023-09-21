import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardBody, CardImage, CardFooter } from '@/ui'

import * as HeaderStories from './CardHeader.stories'

const meta: Meta = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

const data = {
	name: 'husky',
	src: '/img/dogs/husky.jpg',
	description:
		'The Alaskan husky is a breed of medium-sized working sled dog, developed specifically for its performance as such.',
	link: 'https://en.wikipedia.org/wiki/Alaskan_husky',
}

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

export const LoggedIn: Story = {
	args: {
		...HeaderStories.CardTitle.args,
		...Default.args,
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
