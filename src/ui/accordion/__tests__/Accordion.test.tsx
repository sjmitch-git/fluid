import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Accordion from '../Accordion'
import { AccordionProps } from '../types'

import Data from '@/data/dogs.json'

describe('Accordion Component', () => {
	const defaultProps: AccordionProps = {
		data: Data,
		icon: 'symbol',
		layout: 'flush',
		opened: '1',
		className: 'test-class',
		size: 'md',
	}

	it('renders correctly', () => {
		const { getByTestId } = render(<Accordion {...defaultProps} />)
		const accordion = getByTestId('accordion')
		expect(accordion).toBeInTheDocument()
		expect(accordion).toHaveClass('accordion group test-class text-base')
	})

	it('renders children when no data is provided', () => {
		const { getByTestId } = render(
			<Accordion
				className='test-class'
				size='md'
				data={undefined}
				opened='1'
				layout='default'
				icon='symbol'
			>
				<div data-testid='custom-child'>Custom Child</div>
			</Accordion>
		)
		const customChild = getByTestId('custom-child')
		expect(customChild).toBeInTheDocument()
	})
})
