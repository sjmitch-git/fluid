import { render } from '@testing-library/react'
import { Button } from '..'

it('renders Button unchanged', () => {
	const { container } = render(<Button>Click!</Button>)

	expect(container).toMatchSnapshot()
})
