import React from 'react'

import { FileUploadProps } from './types'
import { Label, Input, Figure } from '@/ui'

import { FaUpload } from 'react-icons/fa'

const defaultStyles = 'overflow-hidden'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
}

const FileUpload = ({
	className = defaultStyles,
	size = 'md',
	accept,
	label = 'File Upload',
	icon,
	onChange,
	value,
	multiple,
	fileURL,
}: FileUploadProps) => {
	const sizeClasses = sizes[size]

	return (
		<div
			className={`fileupload group ${className} ${sizeClasses}`}
			data-testid='fileupload'
		>
			<div className='flex gap-4'>
				<Label
					label={icon ? <FaUpload title={label} /> : label}
					layout='col'
					size={size}
					type='file'
					className='items-center !flex !flex-row'
				>
					<Input
						accept={accept}
						name='file'
						type='file'
						hint={true}
						title={value ? value : `Accept: ${accept}`}
						onChange={onChange}
						multiple={multiple}
						size={size}
					/>
				</Label>
			</div>
			{fileURL && accept?.includes('image') && (
				<div className='pt-4'>
					<Figure
						src={fileURL}
						alt='Uploaded Image'
						caption={value}
					/>
				</div>
			)}
		</div>
	)
}

export default FileUpload
