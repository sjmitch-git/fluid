'use client'

import React, { useEffect } from 'react'
import Prism from 'prismjs'

import { CodeblockProps } from './types'

const Codeblock = ({ language = 'plaintext', children }: CodeblockProps) => {
	useEffect(() => {
		Prism.highlightAll()
	}, [children])

	return (
		<pre>
			<code className={`language-${language}`}>{children}</code>
		</pre>
	)
}

export default Codeblock
