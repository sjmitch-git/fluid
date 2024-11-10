import type { Meta, StoryObj } from '@storybook/react'
import { LineChart } from '..'

const meta: Meta = {
	title: 'Fluid UI/Data Visualization/Charts/Line Chart',
	component: LineChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **LineChart** component is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of multiple data sets.

### Key Features:
- **Responsive Design**: Automatically adjusts size and layout for any screen size.
- **Chart.js Configuration**: Options can be passed to customize appearance and behavior.

### Import:
\`\`\`jsx
import { LineChart } from '@smitch/fluid'
\`\`\`

### Example Usage:
\`\`\`jsx
<LineChart
    data={{
        datasets: [
            {
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [
                    3000,
                    4000,
                    3200,
                    5000,
                    4200,
                    6000,
                    5500
                ],
                label: 'Sales for 2023 (in USD)'
            }
        ],
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ]
    }}
	title = 'Monthly Sales Data for 2023',
	legendPosition = 'top',
    options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
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
} satisfies Meta<typeof LineChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Single Line',
	args: {
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Sales for 2023 (in USD)',
					data: [3000, 4000, 3200, 5000, 4200, 6000, 5500],
					borderColor: 'rgba(75, 192, 192, 1)',
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
				},
			],
		},
		title: 'Monthly Sales Data for 2023',
		legendPosition: 'top',
		options: {
			scales: {
				y: {
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

export const MultiLine: Story = {
	args: {
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: '2019 (USD)',
					data: [2500, 3000, 2800, 3200, 4000, 4500, 4700],
					borderColor: 'rgba(255, 99, 132, 1)',
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
				},
				{
					label: '2020 (USD)',
					data: [2700, 3400, 3100, 3300, 4200, 4800, 5000],
					borderColor: 'rgba(54, 162, 235, 1)',
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
				},
				{
					label: '2021 (USD)',
					data: [2900, 3600, 3300, 3700, 4300, 4900, 5200],
					borderColor: 'rgba(75, 192, 192, 1)',
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
				},
				{
					label: '2022 (USD)',
					data: [3100, 3800, 3400, 3900, 4400, 5000, 5300],
					borderColor: 'rgba(153, 102, 255, 1)',
					backgroundColor: 'rgba(153, 102, 255, 0.2)',
				},
				{
					label: '2023 (USD)',
					data: [3300, 4000, 3500, 4100, 4600, 5200, 5500],
					borderColor: 'rgba(255, 159, 64, 1)',
					backgroundColor: 'rgba(255, 159, 64, 0.2)',
				},
			],
		},
		title: 'Monthly Sales Data Comparison (2019-2023)',
		legendPosition: 'bottom',
	},
	argTypes: {
		...Default.argTypes,
	},
}
