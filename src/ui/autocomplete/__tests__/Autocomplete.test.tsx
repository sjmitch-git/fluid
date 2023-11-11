import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Autocomplete } from '..'

import data from '@/data/countries.json'

let component: HTMLElement

describe('Autocomplete Component', () => {
	beforeEach(() => {
		render(
			<Autocomplete
				data={data}
				list='countries'
				placeholder='Select Country'
			/>
		)
		component = screen.getByTestId('input')
		//logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
