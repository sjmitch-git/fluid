import type { Meta, StoryObj } from '@storybook/react'
import { DoughnutChart } from '..'

const meta: Meta = {
	title: 'Fluid UI/Data Visualization/Charts/Doughnut Chart',
	component: DoughnutChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **DoughnutChart** component is a circular chart divided into slices to illustrate numerical proportions. It is ideal for displaying relative data proportions for various categories.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout for any screen size.
- **Chart.js Configuration**: Options can be passed to customize appearance and behavior.
- **Legend Positioning**: Customizable legend position with the \`legendPosition\` prop.

### Import:
\`\`\`jsx
import { DoughnutChart } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<DoughnutChart
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
} satisfies Meta<typeof DoughnutChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Doughnut Chart',
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
	},
}
