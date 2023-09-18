import { Card, CardHeader, CardBody, CardFooter, CardImage } from '@/ui';

import Dogs from '@/data/dogs.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className='mb-12 grid gap-4 md:grid-cols-4 lg:grid-cols-6'>
				{Dogs.map((dog, _index) => (
					<Card key={dog.name}>
            <CardHeader title={dog.name} />
            <CardImage title={dog.name} src={dog.src} />
              <CardBody><p>{dog.description}</p></CardBody>
              <CardFooter link={dog.link} linkLabel={dog.name}>Footer content here</CardFooter>
          </Card>
				))}
			</div>


    </main>
  )
}
