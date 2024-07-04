import { AccordionCardProps } from '../types'

import { Card, CardBody, CardImage, CardFooter, AccordionSection } from '@/ui'

const AccordionCard = ({ src, title, description, link }: AccordionCardProps) => {
	return (
		<AccordionSection>
			<Card
				layout='row'
				className='p-2'
			>
				{src && (
					<CardImage
						title={title}
						src={src}
						aspect='landscape'
					/>
				)}
				<CardBody>
					<p className='line-clamp-2'>{description}</p>
					<CardFooter
						link={link}
						linkLabel={title}
					/>
				</CardBody>
			</Card>
		</AccordionSection>
	)
}

export default AccordionCard
