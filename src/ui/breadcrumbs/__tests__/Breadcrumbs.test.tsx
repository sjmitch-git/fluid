import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Breadcrumbs } from '..'

let component: HTMLElement

describe('Breadcrumbs Component', () => {
	beforeEach(() => {
		render(<Breadcrumbs></Breadcrumbs>)
		component = screen.getByTestId('breadcrumbs')
		// logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
