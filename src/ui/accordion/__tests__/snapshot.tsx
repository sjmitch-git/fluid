import { render } from '@testing-library/react'
import { Accordion } from '..'

import Data from '@/data/dogs.json'
const data = Data[0]

it('renders Accordion unchanged', () => {
	const { container } = render(
		<Accordion
			data={Data}
			icon='symbol'
			layout='flush'
			opened='1'
			size='md'
			theme='light'
		/>
	)

	expect(container).toMatchSnapshot()
})
