import { render } from '@testing-library/react'
import { Autocomplete } from '..'

import data from '@/data/countries.json'

it('renders Autocomplete unchanged', () => {
	const { container } = render(
		<Autocomplete
			data={data}
			list='countries'
			placeholder='Select Country'
		/>
	)

	expect(container).toMatchSnapshot()
})
