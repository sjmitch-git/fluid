# TwitterEmbed Component

The `TwitterEmbed` component allows users to embed tweets or a Twitter timeline into their UI. It provides customization options such as language, theme, and visibility of Twitter's user interface elements like headers and borders.

## Props

| Prop          | Type                  | Default   | Description                                                           |
| ------------- | --------------------- | --------- | --------------------------------------------------------------------- |
| `handle`      | `string`              | `N/A`     | The Twitter handle to display tweets from.                            |
| `status`      | `string`              | `N/A`     | A specific tweet's status ID for embedding a single tweet.            |
| `lang`        | `string`              | `'en'`    | Language for the embedded content.                                    |
| `theme`       | `'light' \| 'dark'`   | `'light'` | Controls the theme of the embedded tweet or timeline.                 |
| `header`      | `boolean`             | `false`   | Hides or shows the Twitter timeline header.                           |
| `borders`     | `boolean`             | `false`   | Controls visibility of borders around the embedded tweet or timeline. |
| `transparent` | `boolean`             | `false`   | Sets the background of the embedded content to be transparent.        |
| `scrollbars`  | `boolean`             | `false`   | Enables or disables scrollbars in the Twitter timeline.               |
| `height`      | `number`              | `N/A`     | Sets a specific height for the Twitter timeline.                      |
| `className`   | `string`              | `''`      | Additional CSS classes for styling.                                   |
| `style`       | `React.CSSProperties` | `N/A`     | Inline styles for further customization of the component.             |

## Usage

### Single Tweet Embed

```tsx
import { TwitterEmbed } from '@/ui'

const MyPage = () => (
	<TwitterEmbed
		handle='storybookjs'
		status='1767571829365883097'
		theme='light'
		header={true}
		borders={false}
		transparent={false}
		scrollbars={false}
	/>
)
```

### Timeline Tweet Embed

```tsx
import { TwitterEmbed } from '@/components'

const MyPage = () => (
	<TwitterEmbed
		handle='elonmusk'
		theme='dark'
		borders={true}
		height={600}
		scrollbars={true}
	/>
)
```
