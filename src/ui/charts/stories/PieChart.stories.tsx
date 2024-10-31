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
- **Donut Option**: Supports displaying as a donut chart with an inner cutout.
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
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
    ],
  }}
  title="Sales Distribution by Category"
  legendPosition="bottom"
  options = {
	borderWidth: 0,
  }
/>
\`\`\`

### Data Structure:
\`\`\`jsx
data = {
    datasets: [{
        data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
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
					backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
				},
			],
		},
		title: 'Product Sales by Category',
		legendPosition: 'bottom',
		options: {
			borderWidth: 0,
		},
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
		donut: {
			table: {
				disable: true,
			},
		},
	},
}

export const DonutChart: Story = {
	args: {
		...Default.args,
		donut: true,
	},
	argTypes: {
		...Default.argTypes,
	},
}
