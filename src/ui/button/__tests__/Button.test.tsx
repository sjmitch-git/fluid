import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
//import { logRoles } from '@testing-library/dom'

import { Button } from '..'

let component: HTMLElement

describe('Button Component', () => {
	beforeEach(() => {
		render(<Button>Click!</Button>)
		component = screen.getByTestId('button')
		//logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
