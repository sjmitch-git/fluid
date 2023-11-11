import { AccordionSectionProps } from '../types'

const AccordionSection = ({ children }: AccordionSectionProps) => {
	return (
		<section
			className='max-h-0 peer-[.open]:max-h-64 overflow-y-hidden transition-all duration-500'
			role='group'
		>
			{children}
		</section>
	)
}

export default AccordionSection
