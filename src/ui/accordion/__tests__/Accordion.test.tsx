import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
//import { logRoles } from '@testing-library/dom'

import { Accordion } from '..'

import Data from '@/data/dogs.json'

let component: HTMLElement
let body: HTMLElement

//const data = Data[0]

describe('Accordion Component', () => {
	beforeEach(() => {
		render(
			<Accordion
				data={Data}
				icon='symbol'
				layout='flush'
				opened='1'
				size='md'
				theme='light'
			/>
		)
		component = screen.getByTestId('accordion')
		//logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
