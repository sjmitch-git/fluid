import { Card, CardHeader, CardBody, CardFooter, CardImage, Alert, Carousel, Figure } from '@/ui'

import Dogs from '@/data/dogs.json'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='mb-12 max-w-lg'>
				<div className='mx-auto mb-12'>
					<Alert message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian. Bespoke meggings health goth meh ascot listicle, cronut vaporware.</p>" />
				</div>
				<div className='mx-auto mb-12'>
					<Alert
						status='error'
						message="<p><strong>Ugh umami</strong> bacon butcher <a href='#'>pickled kogi</a> stumptown, <em>subway tile</em> gatekeep flexitarian.</p>"
					/>
				</div>
			</div>

			<div className='mb-12 max-w-lg bg-dark'>
				<Carousel data={Dogs}>
					<div>#Carousel</div>
				</Carousel>
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-2 w-full'>
				<Figure
					alt='Beagle'
					className='m-auto max-w-sm'
					src='/img/dogs/beagle.jpg'
					aspect='circle'
					backdrop='light'
				/>
				<Figure
					caption='Irish Wolfhound'
					alt='Irish Wolfhound'
					className='m-auto max-w-sm'
					src='/img/dogs/wolfhound.jpg'
					aspect='circle'
				/>
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Dogs.map((dog, _index) => (
					<Card key={dog.name}>
						<CardBody>
							<CardHeader title={dog.name} />
							<p className='line-clamp-2'>{dog.description}</p>
							<CardFooter
								link={dog.link}
								linkLabel={dog.name}
							/>
						</CardBody>
					</Card>
				))}
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-3'>
				{Dogs.map((dog, _index) => (
					<Card
						key={dog.name}
						theme='dark'
						layout='row'
					>
						<CardImage
							title={dog.name}
							src={dog.src}
						/>

						<CardBody>
							<CardHeader title={dog.name} />
							<p className='line-clamp-2'>{dog.description}</p>
							<CardFooter
								link={dog.link}
								linkLabel={dog.name}
							/>
						</CardBody>
					</Card>
				))}
			</div>

			<div className='mb-12 grid gap-4 md:grid-cols-3'>
				{Dogs.map((dog, _index) => (
					<Card
						key={dog.name}
						theme='dark'
						layout='row'
					>
						<CardBody>
							<CardHeader title={dog.name} />
							<p className='line-clamp-2'>{dog.description}</p>
							<CardFooter
								link={dog.link}
								linkLabel={dog.name}
							/>
						</CardBody>
					</Card>
				))}
			</div>
		</main>
	)
}
