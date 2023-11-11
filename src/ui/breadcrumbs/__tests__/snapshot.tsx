import { render } from '@testing-library/react'
import { Breadcrumbs } from '..'

it('renders Breadcrumbs unchanged', () => {
	const { container } = render(<Breadcrumbs></Breadcrumbs>)

	expect(container).toMatchSnapshot()
})
