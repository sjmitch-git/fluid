import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Button } from '..'

//import Data from '@/data/dogs.json'

let component: HTMLElement
let body: HTMLElement

//const data = Data[0]

describe('Button Component', () => {
	beforeEach(() => {
		render(<Button>Click!</Button>)
		component = screen.getByTestId('button')
		logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	})
})
