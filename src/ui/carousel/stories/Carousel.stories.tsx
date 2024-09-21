import type { Meta, StoryObj } from '@storybook/react'
import { Carousel } from '..'
import { Card, CardHeader, CardBody, CardFooter } from '@/ui'

import Data from '@/data/dogs.json'

const meta: Meta = {
	title: 'Fluid UI/Menus/Carousel',
	component: Carousel,
	args: {
		aspect: 'landscape',
		outline: 'medium',
		rounded: 'none',
		caption: true,

		buttonsPosition: 'middle',
		buttonLayout: 'circle',
		buttonIcon: 'chevron',
		buttonSize: 'md',
		buttonBackground: 'dark',
		buttonColor: 'light',
		buttonOutline: true,

		autoplay: false,
		autoplayDuration: 3000,

		className: '',
		data: Data,
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
		autoplayDuration: 3000,
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
				className='aspect-[4/3]'
				outline={false}
				rounded='none'
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
