import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Label } from '..'

let component: HTMLElement

describe('Label Component', () => {
	beforeEach(() => {
		render(
			<Label label='Label Value'>
				<input
					type='text'
					className='form-input w-full'
				/>
			</Label>
		)
		component = screen.getByTestId('label')
		logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
