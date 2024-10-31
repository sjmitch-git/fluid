import type { Meta, StoryObj } from '@storybook/react'
import { BarChart } from '..'

const meta: Meta = {
	title: 'Fluid UI/Data Visualization/Charts/Bar Chart',
	component: BarChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **BarChart** component renders clear and responsive bar charts for visualizing data such as temperature ranges, sales data, or other categorical data points.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout to fit different screen sizes, ensuring accessibility across devices.
- **Dynamic Axis Labels**: Customizable x and y-axis labels make it versatile for various datasets.
- **Legend Positioning**: The position of the chart\’s legend can be specified with the \`legendPosition\` prop.
- **Chart.js Configuration**: Accepts additional Chart.js options via the \`options\` prop, allowing further customization of appearance and behavior.
- **Title Customization**: Optionally display a title with the \`title\` prop, making it easy to label data context.


### Import:
\`\`\`jsx
import { BarChart } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<BarChart
    data={{
        datasets: [
            {
                label: 'Min Temperature (°C)',
                data: [12, 15, 10, 8, 14],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderWidth: 0,
            },
            {
                label: 'Max Temperature (°C)',
                data: [22, 25, 20, 18, 24],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 0,
            },
        ],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
    }}
	title = 'Weekly Temperature Ranges',
	legendPosition = 'bottom',
    xAxisLabel = 'Days',
	yAxisLabel = '°C'
/>
\`\`\`
`,
			},
		},
	},
} satisfies Meta<typeof BarChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Vertical Bar Chart',
	args: {
		data: {
			labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			datasets: [
				{
					label: 'Min (°C)',
					data: [12, 15, 10, 8, 14],
					backgroundColor: 'rgba(54, 162, 235, 0.6)',
					borderWidth: 0,
				},
				{
					label: 'Max (°C)',
					data: [22, 25, 20, 18, 24],
					backgroundColor: 'rgba(255, 99, 132, 0.6)',
					borderWidth: 0,
				},
			],
		},
		title: 'Weekly Temperature Ranges',
		legendPosition: 'bottom',
		xAxisLabel: 'Days',
		yAxisLabel: '°C',
		layout: 'vertical',
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

export const HorizontalBarChart: Story = {
	args: {
		data: {
			labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			datasets: [
				{
					label: 'Min (°C)',
					data: [12, 15, 10, 8, 14],
					backgroundColor: 'rgba(54, 162, 235, 0.6)',
					borderWidth: 0,
				},
				{
					label: 'Max (°C)',
					data: [22, 25, 20, 18, 24],
					backgroundColor: 'rgba(255, 99, 132, 0.6)',
					borderWidth: 0,
				},
			],
		},
		title: 'Weekly Temperature Ranges',
		legendPosition: 'bottom',
		xAxisLabel: 'Days',
		yAxisLabel: '°C',
		layout: 'horizontal',
	},
	argTypes: {
		...Default.argTypes,
	},
}
