import { AccordionItemProps } from '../types'

import { AccordionHead, AccordionSection } from '..'

const AccordionItem = ({
	layoutClasses,
	themeClasses,
	id,
	title,
	icon = 'symbol',
	open,
	setOpen,
	children,
}: AccordionItemProps) => {
	return (
		<div
			className={`${layoutClasses} ${themeClasses}`}
			key={id}
		>
			<AccordionHead
				id={id}
				title={title}
				icon={icon}
				open={open}
				setopen={setOpen}
			/>
			<AccordionSection>{children}</AccordionSection>
		</div>
	)
}

export default AccordionItem
