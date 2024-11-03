import type { Meta, StoryObj } from '@storybook/react'
import { RadarChart } from '..'
import { TooltipItem } from 'chart.js'

const meta: Meta<typeof RadarChart> = {
	title: 'Fluid UI/Data Visualization/Charts/Radar Chart',
	component: RadarChart,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
The **RadarChart** component is ideal for displaying multivariate data, such as performance metrics across different categories. It plots data points for each category and connects them, making it easy to compare values across multiple datasets.

### Key Features:
- **Customizable Legend Position**: Allows for control over legend placement.
- **Scalable Options**: Supports configuration of scales, gridlines, and more via \`options\` prop.
- **Title Customization**: Display a title with the \`title\` prop for additional context.

### Import:
\`\`\`jsx
import { RadarChart } from '@smitch/fluid';
\`\`\`

### Example Usage:
\`\`\`jsx
<RadarChart
    data={{
        labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Skill'],
        datasets: [
            {
                label: 'Athlete A',
                data: [65, 75, 70, 80, 60],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
            },
            {
                label: 'Athlete B',
                data: [50, 60, 80, 70, 75],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
            },
        ],
    }}
    title="Athlete Performance Comparison"
    legendPosition="bottom"
/>
\`\`\`
`,
			},
		},
	},
}

export default meta
type Story = StoryObj<typeof RadarChart>

export const Default: Story = {
	name: 'Radar Chart',
	args: {
		data: {
			labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Skill'],
			datasets: [
				{
					label: 'Athlete A',
					data: [65, 75, 70, 80, 60],
					backgroundColor: 'rgba(54, 162, 235, 0.5)',
					borderColor: 'rgba(54, 162, 235, 1)',
				},
				{
					label: 'Athlete B',
					data: [50, 60, 80, 70, 75],
					backgroundColor: 'rgba(255, 99, 132, 0.5)',
					borderColor: 'rgba(255, 99, 132, 1)',
				},
			],
		},
		title: 'Athlete Performance Comparison',
		legendPosition: 'bottom',
		options: {
			scales: {
				r: {
					beginAtZero: true,
				},
			},
			plugins: {
				tooltip: {
					callbacks: {
						label: (tooltipItem: TooltipItem<'radar'>) => {
							return `Score: ${tooltipItem.raw}`
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
