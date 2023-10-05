import { render } from '@testing-library/react'
import { Label } from '..'

import Data from '@/data/dogs.json'
const data = Data[0]

it('renders Label unchanged', () => {
	const { container } = render(
		<Label label='Label Value'>
			<input
				type='text'
				className='form-input w-full'
			/>
		</Label>
	)

	expect(container).toMatchSnapshot()
})
