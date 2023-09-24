import { render } from '@testing-library/react'
import { Card, CardBody, CardHeader, CardFooter, CardImage } from '..'

import Data from '@/data/dogs.json'
const data = Data[0]

it('renders Card unchanged', () => {
	const { container } = render(
		<Card
			theme='dark'
			layout='col'
		>
			<CardImage
				title={data.name}
				src={data.src}
				aspect='landscape'
			/>
			<CardBody>
				<CardHeader title={data.name} />
				<p className='line-clamp-2'>{data.description}</p>
				<CardFooter
					link={data.link}
					linkLabel={data.name}
				/>
			</CardBody>
		</Card>
	)

	expect(container).toMatchSnapshot()
})
