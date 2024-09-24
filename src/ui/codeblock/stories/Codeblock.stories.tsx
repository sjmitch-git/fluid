import type { Meta, StoryObj } from '@storybook/react'
import { Codeblock } from '..'
import 'prismjs/themes/prism-tomorrow.min.css'
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-tsx')

const meta: Meta = {
	title: 'Fluid UI/Typography/Codeblock',
	component: Codeblock,
	tags: ['autodocs'],
} satisfies Meta<typeof Codeblock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'HTML Code',
	argTypes: {
		style: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: `<h1>Header H1</h1>
<p>Paragraph Text with <strong>some bold text</strong> and <em>italic text</em>.</p>

<h2>Header H2</h2>
<p><a href="https://example.com">A link</a>.</p>

<ul>
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>

<ol>
  <li>First ordered item</li>
  <li>Second ordered item</li>
</ol>

<blockquote>
  <p>This is a blockquote. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</blockquote>

<h3>Image Example</h3>
<p>Below is an example image:</p>
<img src="https://via.placeholder.com/150" alt="Example Image" />`,
		language: 'markup',
	},
}

export const CSSCode: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		children: `/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Basic layout styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}`,
		language: 'css',
	},
}

export const JSCode: Story = {
	name: 'JavaScript Code',
	argTypes: {
		...Default.argTypes,
	},
	args: {
		children: `// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Calculate factorial for numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(\`Factorial of \${i} is \${factorial(i)}\`);
}

// Arrow function to check if a number is even
const isEven = (num) => num % 2 === 0;

// Check if numbers 1 through 5 are even
for (let i = 1; i <= 5; i++) {
  console.log(\`\${i} is \${isEven(i) ? 'even' : 'odd'}\`);
}`,
		language: 'javascript',
	},
}

export const TSCode: Story = {
	name: 'TypeScript Code',
	argTypes: {
		...Default.argTypes,
	},
	args: {
		children: `// Define a User interface
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

// Create a function that accepts a User object
function greetUser(user: User): string {
  return user.isAdmin
    ? \`Hello, Admin \${user.name}!\`
    : \`Hello, \${user.name}!\`;
}

// Create a generic function to log an array of items
function logItems<T>(items: T[]): void {
  items.forEach((item) => console.log(item));
}

// Example usage of the greetUser function
const user: User = { id: 1, name: 'Alice', isAdmin: true };
console.log(greetUser(user));

// Example usage of the logItems function
logItems<number>([1, 2, 3, 4, 5]);
logItems<string>(['apple', 'banana', 'cherry']);`,
		language: 'javascript',
	},
}

export const JSXCode: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		children: `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`,
		language: 'jsx',
	},
}

export const TSXCode: Story = {
	argTypes: {
		...Default.argTypes,
	},
	args: {
		children: `import React, { useState } from 'react';

// Define types for props
interface ButtonProps {
  label: string;
}

const Counter: React.FC<ButtonProps> = ({ label }) => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div>
      <h1>{label}: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;`,
		language: 'tsx',
	},
}
