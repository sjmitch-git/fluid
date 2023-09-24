import React from 'react'

import { TemplateBodyProps } from '../types'

const defaultStyles = 'p-2'

const TemplateBody = ({ className = defaultStyles, children }: TemplateBodyProps) => {
	return (
		<div
			className={`TemplateBody group ${className}`}
			data-testid='body'
		>
			{children}
		</div>
	)
}

export default TemplateBody
