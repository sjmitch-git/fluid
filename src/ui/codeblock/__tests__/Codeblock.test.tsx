import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Codeblock } from '..'

jest.mock('prismjs', () => ({
	highlightAll: jest.fn(),
}))

describe('Codeblock', () => {
	it('renders the code block with the correct language class and children', () => {
		const language = 'jsx'
		const children = '<div>Hello, world!</div>'

		render(<Codeblock language={language}>{children}</Codeblock>)

		const codeElement = screen.getByText(children)
		expect(codeElement).toBeInTheDocument()
		expect(codeElement).toHaveClass(`language-${language}`)
	})
	/*
	it('calls Prism.highlightAll when the component mounts', () => {
		const language = 'jsx'
		const children = '<div>Hello, world!</div>'

		render(<Codeblock language={language}>{children}</Codeblock>)

		expect(Prism.highlightAll).toHaveBeenCalled()
	}) */

	it('renders the code block with the default language class when no language is provided', () => {
		const children = '<div>Hello, world!</div>'

		render(<Codeblock>{children}</Codeblock>)

		const codeElement = screen.getByText(children)
		expect(codeElement).toBeInTheDocument()
		expect(codeElement).toHaveClass('language-plaintext')
	})
})
