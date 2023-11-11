import { render } from '@testing-library/react'
import { Input } from '..'

it('renders Input unchanged', () => {
	const { container } = render(<Input type='text' />)

	expect(container).toMatchSnapshot()
})
