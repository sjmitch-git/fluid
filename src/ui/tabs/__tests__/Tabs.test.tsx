import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Tabs } from '..'

const defaultContent = () => (
	<>
		<div
			id='tab1'
			title='Tab 1'
		>
			<div>Tab 1 content</div>
		</div>
		<div
			id='tab2'
			title='Tab 2'
		>
			<div>Tab 2 content</div>
		</div>
		<div
			id='tab3'
			title='Tab 3'
		>
			<div>Tab 3 content</div>
		</div>
		<div
			id='tab4'
			title='Tab 4'
		>
			<div>Tab 4 content</div>
		</div>
	</>
)

const fruits = [
	{ name: 'apples', emoji: '🍏', body: '<p>Some content about <strong>apples</strong></p>' },
	{ name: 'bananas', emoji: '🍌', body: '<p>Some content about <strong>bananas</strong></p>' },
	{ name: 'grapes', emoji: '🍇', body: '<p>Some content about <strong>grapes</strong></p>' },
	{ name: 'lemons', emoji: '🍋', body: '<p>Some content about <strong>lemons</strong></p>' },
]

const emojisContent = () => {
	return fruits.map((item, index) => (
		<div
			id={`tab${index}`}
			key={`tab${index}`}
			title={item.emoji}
		>
			<h3 className='uppercase font-bold text-lg mb-2'>{item.name}</h3>
			<div dangerouslySetInnerHTML={{ __html: item.body }} />
		</div>
	))
}

describe('Tabs Component', () => {
	it('renders default content', () => {
		render(
			<Tabs
				defaultActiveId='tab1'
				minimal={false}
				size='md'
				tabsPosition='center'
			>
				{defaultContent()}
			</Tabs>
		)

		// Check if Tab 1 content is displayed initially
		expect(screen.getByText('Tab 1 content')).toBeInTheDocument()

		// Check if Tab 2 content is not displayed initially
		// expect(screen.queryByText('Tab 2 content')).not.toBeInTheDocument()
	})

	it('switches to Tab 2 content when Tab 2 is clicked', () => {
		render(
			<Tabs
				defaultActiveId='tab1'
				minimal={false}
				size='md'
				tabsPosition='center'
			>
				{defaultContent()}
			</Tabs>
		)

		// Click on Tab 2
		fireEvent.click(screen.getByText('Tab 2'))

		// Check if Tab 1 content is not displayed
		//expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument()

		// Check if Tab 2 content is displayed
		expect(screen.getByText('Tab 2 content')).toBeInTheDocument()
	})

	/* it('renders content with emojis', () => {
		render(
			<Tabs
				defaultActiveId='tab0'
				minimal={false}
				size='xxl'
				tabsPosition='center'
			>
				{emojisContent()}
			</Tabs>
		)

		// Check if apples content is displayed initially
		expect(screen.getByText('Some content about apples')).toBeInTheDocument()

		// Check if bananas content is not displayed initially
		expect(screen.queryByText('Some content about bananas')).not.toBeInTheDocument()
	}) */

	/* it('switches to bananas content when the corresponding tab is clicked', () => {
		render(
			<Tabs
				defaultActiveId='tab0'
				minimal={false}
				size='xxl'
				tabsPosition='center'
			>
				{emojisContent()}
			</Tabs>
		)

		// Click on the bananas tab
		fireEvent.click(screen.getByText('🍌'))

		// Check if apples content is not displayed
		expect(screen.queryByText('Some content about apples')).not.toBeInTheDocument()

		// Check if bananas content is displayed
		expect(screen.getByText('Some content about bananas')).toBeInTheDocument()
	}) */
})
