# Sidebar Component

The `Sidebar` component provides a sliding panel that can be positioned on the left or right side of the screen. It includes features like touch gestures for closing, a backdrop for dimming the rest of the page, and accessibility-friendly interactions.

## Props

### `open: boolean`

Determines whether the sidebar is open or closed.

-   **Type**: `boolean`
-   **Default**: `false`

### `position: 'left' | 'right'`

Specifies the position of the sidebar on the screen.

-   **Type**: `'left' | 'right'`
-   **Default**: `'right'`

### `backdrop: boolean`

Displays a backdrop (dark overlay) when the sidebar is open.

-   **Type**: `boolean`
-   **Default**: `false`

### `className: string`

Allows custom classes to be added to the sidebar.

-   **Type**: `string`
-   **Default**: `''`

### `style: React.CSSProperties`

Allows custom inline styles to be applied to the sidebar.

-   **Type**: `React.CSSProperties`
-   **Default**: `undefined`

### `children: React.ReactNode`

Content to be rendered inside the sidebar.

-   **Type**: `React.ReactNode`

### `onClose: () => void`

Callback function to handle closing the sidebar.

-   **Type**: `function`

## Usage

```tsx
import { Sidebar } from '@/ui'

const MyPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button onClick={() => setIsOpen(true)}>Open Sidebar</button>

			<Sidebar
				open={isOpen}
				position='right'
				backdrop={true}
				onClose={() => setIsOpen(false)}
			>
				<p>This is the content of the sidebar!</p>
			</Sidebar>
		</>
	)
}
```
