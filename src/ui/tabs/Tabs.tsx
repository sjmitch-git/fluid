'use client'

import TabBar from './TabBar'

import { useCallback, useState, useEffect } from 'react'

import { TabsProps, TabProps } from './types'

const defaultTabStyles = 'border border-transparent px-4 py-2 rounded-t w-full'
const defaultActiveTabStyles = 'border-x-neutral border-t-neutral bg-light dark:bg-dark'

const minimalTabStyles =
	'border-b-4 border-b-transparent px-4 py-2 dark:text-light hover:border-b-accent'
const minimalActiveTabStyles = '!border-b-info hover:cursor-default font-bold'

const sizes = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-xl',
	xl: 'text-2xl',
	xxl: 'text-4xl',
}

const Tabs = ({
	className = '',
	defaultActiveId = '',
	tabStyles = defaultTabStyles,
	activeTabStyles = defaultActiveTabStyles,
	icons,
	children,
	minimal = false,
	contentBorder = false,
	size = 'md',
	tabsPosition,
}: TabsProps) => {
	const [tabs, setTabs] = useState<TabProps[]>(null!)
	const [activeId, setActiveId] = useState<string>(defaultActiveId)
	const [nodes, setNodes] = useState<React.ReactNode[]>(null!)

	const content = useCallback(
		(contentRefNode: any) => {
			let arrTabs: any[] = []
			if (contentRefNode) {
				const buildTabs = (item: any, index: number) => {
					const tabObject = {
						id: item.id,
						key: item.id,
						title: icons ? icons[index] : item.title,
					}
					arrTabs.push(tabObject)
				}
				setTabs(arrTabs)
				const children = [...contentRefNode.children]
				setNodes(children)
				children.forEach(buildTabs)
			}
		},
		[icons]
	)

	useEffect(() => {
		const setDisplay = (item: HTMLElement) => {
			if (item.id === activeId) {
				item.classList.add('block')
				item.classList.remove('hidden')
			} else {
				item.classList.add('hidden')
				item.classList.remove('block')
			}
		}
		const setActive = (item: any) => setDisplay(item)
		if (activeId && nodes) nodes.forEach(setActive)
	}, [activeId, nodes])

	const handleClick = (id: string) => setActiveId(id)

	const sizeClasses = sizes[size]

	return (
		<div className={`tabs mx-auto w-full ${minimal ? 'minimal' : ''} ${className}`}>
			<TabBar
				tabs={tabs}
				tabStyles={`${tabStyles} ${minimal ? minimalTabStyles : tabStyles} ${sizeClasses}`}
				activeTabStyles={`${minimal ? minimalActiveTabStyles : activeTabStyles} `}
				activeId={activeId}
				onClick={handleClick}
				tabsPosition={tabsPosition}
			/>
			<div
				ref={content}
				className={`tabwrapper bg-light dark:bg-dark ${
					contentBorder ? 'border' : 'border-t'
				} border-neutral p-4`}
			>
				{children}
			</div>
		</div>
	)
}

export default Tabs
