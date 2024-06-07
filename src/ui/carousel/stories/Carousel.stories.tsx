import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '..'
import { Card, CardHeader, CardBody, CardFooter } from '@/ui'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Carousel',
	component: Carousel,
	args: {
		data: Data,
		theme: 'none',
		caption: true,
		aspect: 'landscape',
		buttonLayout: 'circle',
		buttonIcon: 'chevron',
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
		gallery: {
			table: {
				disable: true,
			},
		},
		rtl: {
			table: {
				disable: true,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		gallery: true,
		autoplay: false,
	},
}

export const Custom: Story = {
	argTypes: {
		caption: {
			table: {
				disable: true,
			},
		},
		aspect: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		gallery: false,
		autoplay: false,
		children: Data.map((item, _index) => (
			<Card
				key={item.name}
				className='aspect-[4/3] even:bg-dark even:text-light'
			>
				<CardBody>
					<CardHeader title={item.name} />
					<p>{item.description}</p>
					<CardFooter
						link={item.link}
						linkLabel={item.name}
					/>
				</CardBody>
			</Card>
		)),
	},
}

export const RTL: Story = {
	args: {
		...Custom.args,
		rtl: true,
	},
	argTypes: {
		...Custom.argTypes,
		gallery: {
			table: {
				disable: false,
			},
		},
	},
}

RTL.decorators = [
	(Story) => (
		<div dir='rtl'>
			<Story />
		</div>
	),
]
