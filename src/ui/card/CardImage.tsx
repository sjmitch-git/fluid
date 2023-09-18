import Image from 'next/image'

import { CardImageProps } from "./types";

const CardImage = ({ title, src }: CardImageProps) => {
    return <figure className="card-image">
        <Image
            src={src}
            fill
			sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='img'
            alt={title}
        />
  </figure>;
};

export default CardImage;
