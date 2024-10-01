import { Meta, StoryObj } from '@storybook/react'
import Heading from '../Heading'

const meta: Meta = {
	title: 'Fluid UI/Typography/Heading',
	component: Heading,
	parameters: {
		docs: {
			description: {
				component:
					'The Heading component is used to provide predefined headline styles, such as H1, H2, H3, etc., ensuring visual consistency across the application. It offers customizable properties like alignment, font weight, and text transformation.',
			},
			source: {
				code: `
import Heading from '@/ui';

const ExamplePage = () => {
  return (
    <div>
      <Heading level={1} align="center" weight="bold" transform="uppercase">
        This is a H1 Heading
      </Heading>
      <Heading level={2} align="left" weight="semibold">
        This is a H2 Heading
      </Heading>
      <Heading level={3} align="right" weight="normal" transform="capitalize">
        This is a H3 Heading
      </Heading>
    </div>
  );
};

export default ExamplePage;
`,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		level: 1,
		align: 'left',
		weight: 'bold',
		transform: 'capitalize',
		children: 'Some heading text',
	},
}
