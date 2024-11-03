import type { Meta, StoryObj } from '@storybook/react'
import { PolarAreaChart } from '..'

const meta: Meta<typeof PolarAreaChart> = {
	title: 'Fluid UI/Data Visualization/Charts/Polar Area Chart',
	component: PolarAreaChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **PolarAreaChart** component displays data in a circular format, where each segment represents a proportionate value. Ideal for visualizing categorical data where the focus is on showing the relative size of each category.

### Key Features:
- **Responsive Design**: Fits different screen sizes and maintains aspect ratio.
- **Customizable Legend Position**: Adjust the legend position with the \`legendPosition\` prop.
- **Chart.js Options**: Customize further with the \`options\` prop.
- **Title Support**: Display context with the \`title\` prop.

### Import:
\`\`\`jsx
import { PolarAreaChart } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<PolarAreaChart
    data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'Category Breakdown',
                data: [11, 16, 7, 3, 14, 9],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }}
    title="Category Breakdown"
    legendPosition="bottom"
    options={{
        scales: {
            r: {
                beginAtZero: true,
            },
        },
    }}
/>
\`\`\`
`,
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof PolarAreaChart>

export const Default: Story = {
	name: 'Polar Area Chart',
	args: {
		data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [
				{
					label: 'Category Breakdown',
					data: [11, 16, 7, 3, 14, 9],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
		},
		title: 'Category Breakdown',
		legendPosition: 'bottom',
		options: {
			scales: {
				r: {
					beginAtZero: true,
				},
			},
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
