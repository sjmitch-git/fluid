import Link from 'next/link'

import { CardFooterProps } from "./types";

const CardFooter = ({ link, linkLabel, children }: CardFooterProps) => {
  return (
    <footer className="card-footer">
      {children}
      {link && (
        <Link
          href={link}
          target={link.startsWith('https://') ? '_blank' : '_self'}
        >
          {linkLabel}
        </Link>
      )}
    </footer>
  )
};

export default CardFooter;
