# Drawer Component

The `Drawer` component creates a sliding panel that appears from the top or bottom of the screen. It is commonly used for modal or popup-like functionality in applications, providing an easy way to display content without navigating away from the current page.

## Props

### `open: boolean`

Controls whether the drawer is visible.

-   **Type**: `boolean`
-   **Default**: `false`

### `position: 'top' | 'bottom'`

Specifies the drawer's position on the screen.

-   **Type**: `'top' | 'bottom'`
-   **Default**: `'bottom'`

### `backdrop: boolean`

Toggles a backdrop overlay when the drawer is open.

-   **Type**: `boolean`
-   **Default**: `false`

### `className: string`

Optional additional class names for custom styling.

-   **Type**: `string`
-   **Default**: `''`

### `style: React.CSSProperties`

Inline styles for further customization of the drawer.

-   **Type**: `React.CSSProperties`
-   **Default**: `undefined`

### `children: React.ReactNode`

Content to be rendered inside the drawer.

-   **Type**: `React.ReactNode`

### `onClose: () => void`

Callback function to handle closing the drawer.

-   **Type**: `function`

## Usage

```tsx
import { Drawer } from '@/components'

const MyPage = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

	return (
		<>
			<button onClick={() => setIsDrawerOpen(true)}>Open Drawer</button>

			<Drawer
				open={isDrawerOpen}
				position='bottom'
				backdrop={true}
				onClose={() => setIsDrawerOpen(false)}
			>
				<p>This is the content inside the drawer!</p>
			</Drawer>
		</>
	)
}
```
