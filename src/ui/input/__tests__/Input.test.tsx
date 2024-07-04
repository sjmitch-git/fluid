import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Input } from '..'

let component: HTMLElement

describe('Input Component', () => {
	beforeEach(() => {
		render(
			<Input
				type='text'
				autocomplete='name'
			/>
		)
		component = screen.getByTestId('name')
		// logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
