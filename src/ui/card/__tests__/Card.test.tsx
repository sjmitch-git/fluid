import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { logRoles } from '@testing-library/dom'

import { Card, CardBody, CardHeader, CardFooter, CardImage } from '..'

import Data from '@/data/dogs.json'

let component: HTMLElement
let banner: HTMLElement
let heading: HTMLElement
let link: HTMLElement
let image: HTMLElement
let figure: HTMLElement
let contentinfo: HTMLElement

const data = Data[0]

describe('Card Component', () => {
	beforeEach(() => {
		render(
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
		component = screen.getByTestId('card')
		banner = screen.getByRole('banner')
		heading = screen.getByRole('heading')
		image = screen.getByRole('img')
		link = screen.getByRole('link')
		figure = screen.getByRole('figure')
		contentinfo = screen.getByRole('contentinfo')
		// logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
		expect(banner).toBeInTheDocument()
		expect(heading).toBeInTheDocument()
		expect(image).toBeInTheDocument()
		expect(link).toBeInTheDocument()
		expect(figure).toBeInTheDocument()
		expect(contentinfo).toBeInTheDocument()
	})

	it("card should have correct 'Theme' class", () => {
		expect(component).toHaveClass('bg-dark')
	})

	it("card should have correct 'Layout' class", () => {
		expect(component).toHaveClass('col')
	})

	it('link should should have correct HREF', () => {
		expect(link).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Akita_(dog)')
	})

	it('link should should have target _blank', () => {
		expect(link).toHaveAttribute('target', '_blank')
	})

	it('heading should should have class card-title', () => {
		expect(heading).toHaveClass('card-title')
	})

	it('heading should should have content "akita"', () => {
		expect(heading.textContent).toBe('akita')
	})

	it('image should should have alt text "akita"', () => {
		expect(image).toHaveAttribute('alt', 'akita')
	})

	it('figure should should have aspect "landscape"', () => {
		expect(figure).toHaveClass('aspect-landscape')
	})
})
