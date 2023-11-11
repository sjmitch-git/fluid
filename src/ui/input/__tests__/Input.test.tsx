import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Input } from '..'

let component: HTMLElement

describe('Input Component', () => {
	beforeEach(() => {
		render(<Input type='text' />)
		component = screen.getByTestId('input')
		// logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
