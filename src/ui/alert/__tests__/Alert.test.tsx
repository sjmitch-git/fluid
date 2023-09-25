import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Alert } from '..'

let component: HTMLElement

describe('Alert Component', () => {
	beforeEach(() => {
		render(
			<Alert
				status='error'
				message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian.</p>"
			/>
		)
		component = screen.getByTestId('alert')
		logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
