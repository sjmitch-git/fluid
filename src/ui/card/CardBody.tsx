import { CardBodyProps } from "./types";

const CardBody = ({ children }: CardBodyProps) => {
  return <div className="card-body">{children}</div>;
};

export default CardBody;
