import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { RadioGroup } from '..'

const getEmoji = (key: string) => {
	for (let i = 0; i < mockData.length; i++) {
		if (mockData[i].id === key) return mockData[i].emoji
	}
	return '🍏'
}

const mockData = [
	{ id: 'apples', emoji: '🍏' },
	{ id: 'bananas', emoji: '🍌' },
	{ id: 'grapes', emoji: '🍇' },
	{ id: 'lemons', emoji: '🍋' },
]

const mockOnChange = jest.fn()

describe('RadioGroup', () => {
	it('renders without crashing', () => {
		render(
			<RadioGroup
				name='fruits'
				data={mockData}
				getIcon={getEmoji}
				onChange={mockOnChange}
			/>
		)
		expect(screen.getByText('Apple')).toBeInTheDocument()
		expect(screen.getByText('Banana')).toBeInTheDocument()
		expect(screen.getByText('Cherry')).toBeInTheDocument()
	})

	it('renders the legend', () => {
		render(
			<RadioGroup
				legend='Select a fruit'
				name='fruits'
				data={mockData}
				getIcon={getEmoji}
				onChange={mockOnChange}
			/>
		)
		expect(screen.getByText('Select a fruit')).toBeInTheDocument()
	})

	it('calls getIcon with correct arguments', () => {
		render(
			<RadioGroup
				name='fruits'
				data={mockData}
				getIcon={getEmoji}
				onChange={mockOnChange}
			/>
		)

		mockData.forEach((item) => {
			expect(getEmoji).toHaveBeenCalledWith(item.id)
		})
	})

	it('changes input when clicked', () => {
		render(
			<RadioGroup
				name='fruits'
				data={mockData}
				getIcon={getEmoji}
				onChange={mockOnChange}
			/>
		)

		const appleInput = screen.getByLabelText('Apple')
		const bananaInput = screen.getByLabelText('Banana')

		// Ensure inputs are initially unchecked
		expect(appleInput).not.toBeChecked()
		expect(bananaInput).not.toBeChecked()

		// Click the apple input
		fireEvent.click(appleInput)
		expect(appleInput).toBeChecked()
		expect(mockOnChange).toHaveBeenCalled()

		// Click the banana input
		fireEvent.click(bananaInput)
		expect(bananaInput).toBeChecked()
		expect(appleInput).not.toBeChecked()
		expect(mockOnChange).toHaveBeenCalled()
	})
})
