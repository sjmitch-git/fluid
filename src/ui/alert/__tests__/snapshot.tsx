import { render } from '@testing-library/react'
import { Alert } from '..'

it('renders Alert unchanged', () => {
	const { container } = render(
		<Alert
			status='error'
			message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian.</p>"
		/>
	)

	expect(container).toMatchSnapshot()
})
