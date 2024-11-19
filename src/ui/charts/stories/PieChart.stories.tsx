import type { Meta, StoryObj } from '@storybook/react'
import { PieChart } from '..'

const meta: Meta = {
	title: 'Fluid UI/Data Visualization/Charts/Pie Chart',
	component: PieChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **PieChart** component is a circular chart divided into slices to illustrate numerical proportions. It is ideal for displaying relative data proportions for various categories.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout for any screen size.
- **Chart.js Configuration**: Options can be passed to customize appearance and behavior.

### Import:
\`\`\`jsx
import { PieChart } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<PieChart
  data={{
    labels: ['Electronics', 'Furniture', 'Clothing', 'Books', 'Other'],
    datasets: [
        {
            label: 'Product Sales Distribution',
            data: [120, 150, 100, 80, 50],
        },
    ],
  }}
  title="Sales Distribution by Category"
  legendposition="bottom"
  aspect="portrait"
  border={false}
/>
\`\`\`

### Data Structure:
\`\`\`jsx
data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
}
\`\`\`
        `,
			},
		},
	},
	decorators: [
		(Story) => (
			<div className='p-4'>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PieChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Pie Chart',
	args: {
		data: {
			labels: ['Electronics', 'Furniture', 'Clothing', 'Books', 'Other'],
			datasets: [
				{
					label: 'Product Sales Distribution',
					data: [120, 150, 100, 80, 50],
				},
			],
		},
		title: 'Product Sales by Category',
		legendposition: 'bottom',
		aspect: 'portrait',
		border: false,
	},
	argTypes: {
		data: {
			table: {
				disable: true,
			},
		},
		options: {
			table: {
				disable: true,
			},
		},
		aspect: {
			table: {
				disable: true,
			},
		},
		legendposition: {
			options: ['top', 'bottom'],
		},
	},
}

export const PieChartInline: Story = {
	args: {
		...Default.args,
		legendposition: 'left',
		aspect: 'landscape',
	},
	argTypes: {
		...Default.argTypes,
		legendposition: {
			options: ['left', 'right'],
		},
	},
}
