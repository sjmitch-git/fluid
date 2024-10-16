import { Meta, StoryObj } from '@storybook/react'
import { Heading } from '..'
import { Badge } from '../..'
import { FaStar } from 'react-icons/fa6'

const BadgeExample = `<Heading level={1} align="left" weight="bold" transform="capitalize">
	<>
	Heading Text
	<Badge
		size='inherit'
		color='accent'
		background='transparent'
	>
		<FaStar />
	</Badge>
	</>
</Heading>`

const meta: Meta = {
	title: 'Fluid UI/Typography/Heading',
	component: Heading,
	parameters: {
		docs: {
			description: {
				component: `The \`Heading\` component is used to provide predefined headline styles, such as H1, H2, H3, etc., ensuring visual consistency across the application. It offers customizable properties like alignment, font weight, and text transformation.
### Key Features:
- **Heading Levels (H1-H6)**: Supports all heading levels to maintain semantic HTML structure.
- **Customizable Styles**: Options for font weight, text alignment, and text transformation (case).
- **Consistent Typography**: Ensures visual consistency across your UI by using predefined styles.
- **Supports Custom Content**: Accepts React nodes as children, allowing the addition of icons, badges, or other inline elements.

### Import:
\`\`\`tsx
import { Heading } from '@smitch/fluid'
\`\`\`

### Usage Example:
\`\`\`tsx
<Heading level={1} align="left" weight="bold" transform="capitalize">
  Example Heading
</Heading>
\`\`\`

### Props:

- \`level\` (number, required): Defines the heading level (H1-H6). Options:
  - \`1\`: Renders an H1 tag.
  - \`2\`: Renders an H2 tag.
  - \`3\`: Renders an H3 tag.
  - \`4\`: Renders an H4 tag.
  - \`5\`: Renders an H5 tag.
  - \`6\`: Renders an H6 tag.
  - **Default**: \`1\`.

- \`weight\` (string, optional): Sets the font weight of the heading. Options:
  - \`'light'\`: Applies a light font weight.
  - \`'normal'\`: Applies a normal font weight.
  - \`'medium'\`: Applies a medium font weight.
  - \`'semibold'\`: Applies a semi-bold font weight.
  - \`'bold'\`: Applies a bold font weight.
  - **Default**: \`'semibold'\`.

- \`align\` (string, optional): Defines the text alignment of the heading. Options:
  - \`'left'\`: Aligns the text to the left.
  - \`'center'\`: Centers the text.
  - \`'right'\`: Aligns the text to the right.
  - **Default**: \`'left'\`.

- \`transform\` (string, optional): Sets the text transformation (case) of the heading. Options:
  - \`'normal'\`: No text transformation.
  - \`'capitalize'\`: Capitalizes the first letter of each word.
  - \`'uppercase'\`: Transforms all text to uppercase.
  - \`'lowercase'\`: Transforms all text to lowercase.
  - **Default**: \`'normal'\`.

- \`children\` (React.ReactNode, required): The content inside the heading. This can be plain text or any React element, such as an icon or badge. `,
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
		children: 'Heading text',
	},
}

export const HeadingWithBadge: Story = {
	decorators: Default.decorators,
	parameters: {
		docs: {
			source: {
				code: BadgeExample,
			},
		},
	},
	args: {
		...Default.args,
		children: (
			<>
				Heading text{' '}
				<Badge
					size='inherit'
					color='accent'
					background='transparent'
				>
					<FaStar />
				</Badge>
			</>
		),
	},
}

Default.decorators = [
	(Story) => (
		<div className='bg-light dark:bg-transparent dark:text-light p-4'>
			<Story />
		</div>
	),
]
