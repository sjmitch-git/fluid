import type { Meta, StoryObj } from '@storybook/react'
import { ScatterChart } from '..'

const meta: Meta = {
	title: 'Fluid UI/Data Visualization/Charts/Scatter Chart',
	component: ScatterChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **ScatterChart** component is ideal for displaying data with two quantitative dimensions (x and y), such as correlation or distribution of values.

### Key Features:
- **Responsive Design**: Adapts to different screen sizes.
- **Customizable Axes**: Allows fine-tuning for both x and y axes.
- **Legend Positioning**: Adjustable legend position using the \`legendPosition\` prop.
- **Chart.js Options**: Extensive customization via the \`options\` prop.
- **Tooltip Customization**: Modify tooltip content for better context.

### Import:
\`\`\`jsx
import { ScatterChart } from '@smitch/fluid';
\`\`\`

### Example Usage:
\`\`\`jsx
<ScatterChart
    data={{
        datasets: [
            {
                label: 'Dataset 1',
                data: [
                    { x: 10, y: 20 },
                    { x: 15, y: 10 },
                    { x: 25, y: 30 },
                    { x: 30, y: 25 },
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }}
    title="Data Correlation"
    legendPosition="top"
    options={{
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
        },
    }}
/>
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
} satisfies Meta<typeof ScatterChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Scatter Chart',
	args: {
		data: {
			datasets: [
				{
					label: 'Group A',
					data: [
						{ x: 10, y: 20 },
						{ x: 15, y: 10 },
						{ x: 25, y: 30 },
					],
					backgroundColor: 'rgba(54, 162, 235, 0.5)',
					borderColor: 'rgba(54, 162, 235, 1)',
				},
				{
					label: 'Group B',
					data: [
						{ x: 20, y: 15 },
						{ x: 30, y: 25 },
						{ x: 40, y: 20 },
					],
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					borderColor: 'rgba(255, 99, 132, 1)',
				},
			],
		},
		title: 'Data Points Comparison',
		legendPosition: 'top',
		gridColor: '#a7a7a7',
		options: {
			scales: {
				x: {
					type: 'linear',
					ticks: {
						stepSize: 5,
					},
					title: {
						display: true,
						text: 'X-Axis Label',
					},
				},
				y: {
					beginAtZero: true,
					title: {
						display: true,
						text: 'Y-Axis Label',
					},
				},
			},
			plugins: {
				tooltip: {
					callbacks: {
						title: (tooltipItems: { raw: { x: number } }[]) => {
							const xValue = tooltipItems[0].raw.x
							return `X Value: ${xValue}`
						},
						label: (tooltipItem: { raw: { y: number } }) => {
							const yValue = tooltipItem.raw.y
							return `Y Value: ${yValue}`
						},
					},
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
