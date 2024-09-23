# Accordion Component

The `Accordion` component allows users to display collapsible content sections. It is useful for showing or hiding information in a compact way, making it easier to manage space on the screen.

## Props

### Props

| Prop        | Type                                                                                                    | Default     | Description                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| `size`      | `'sm'`, `'md'`, `'lg'`                                                                                  | `'md'`      | Controls the size of the accordion items.                       |
| `layout`    | `'default'`, `'flush'`, `'spaced'`                                                                      | `'default'` | Defines the layout style of the accordion items.                |
| `icon`      | `'symbol'`, `'arrow'`                                                                                   | `'symbol'`  | Specifies the type of icon used for the expand/collapse action. |
| `opened`    | `string`                                                                                                | `''`        | ID of the accordion item to be opened by default.               |
| `data`      | `Array<{ id: string, name: string, title: string, description?: string, src?: string, link?: string }>` | `[]`        | Array of objects to populate the accordion items.               |
| `className` | `string`                                                                                                | `''`        | Optional additional class names for custom styling.             |
| `style`     | `React.CSSProperties`                                                                                   | `undefined` | Inline styles for further customization of the accordion.       |
| `children`  | `React.ReactNode`                                                                                       | `undefined` | Content to be rendered inside the accordion.                    |

## Usage

```tsx
import { Accordion } from '@/ui'

const MyPage = () => {
	const accordionData = [
		{
			id: '1',
			name: 'First Item',
			title: 'Accordion Title 1',
			description: 'Details for item 1',
		},
		{
			id: '2',
			name: 'Second Item',
			title: 'Accordion Title 2',
			description: 'Details for item 2',
		},
		{
			id: '3',
			name: 'Third Item',
			title: 'Accordion Title 3',
			description: 'Details for item 3',
		},
	]

	return (
		<Accordion
			data={accordionData}
			icon='symbol'
			layout='flush'
			opened='1'
		/>
	)
}
```

## Custom Content

```tsx
<Accordion
	size='lg'
	layout='spaced'
	icon='arrow'
>
	<AccordionItem
		id='1'
		title='Custom Item 1'
	>
		<p>This is custom content inside the accordion.</p>
	</AccordionItem>
	<AccordionItem
		id='2'
		title='Custom Item 2'
	>
		<p>Another piece of custom content for this accordion item.</p>
	</AccordionItem>
	<AccordionItem
		id='3'
		title='Custom Item 3'
	>
		<p>Yet another piece of custom content for this accordion item.</p>
	</AccordionItem>
</Accordion>
```
