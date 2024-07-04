import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { FileUpload } from '..'
import { FileUploadProps } from '../types'

describe('File Upload Component', () => {
	const defaultProps: FileUploadProps = {
		className: 'test-class',
		size: 'md',
		accept: 'image/*',
		label: 'Upload a file',
		icon: true,
		onChange: jest.fn(),
		multiple: false,
	}

	/* beforeEach(() => {
		render(<FileUpload {...defaultProps} />)
		component = screen.getByTestId('fileupload')
		logRoles(component)
	})

	it('should render all elements', () => {
		expect(component).toBeInTheDocument()
	}) */

	it('renders correctly', () => {
		const { getByText, getByTitle } = render(<FileUpload {...defaultProps} />)
		expect(getByText('Upload a file')).toBeInTheDocument()
		expect(getByTitle('Upload a file')).toBeInTheDocument()
	})

	/* it('shows correct classes and layout', () => {
		const { container } = render(<FileUpload {...defaultProps} />)
		expect(container.firstChild).toHaveClass('fileupload group test-class text-base')
	}) */
})
