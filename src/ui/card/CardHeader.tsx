import { CardHeaderProps } from "./types";

const CardHeader = ({ title }: CardHeaderProps) => {
  return (
    <header className="card-header">
      <h4>{title}</h4>
    </header>
  );
};

export default CardHeader;
