import { Link } from "react-router";

interface NotFoundProps {
  codError?: string;
  tituloError?: string;
  msjError?: string;
}

export const NotFound = ({codError, tituloError, msjError}:NotFoundProps) => {
  return (
    <div className="state-container">
      <span className="not-found-code">{codError}</span>
      <h2>{tituloError}</h2>
      <p>{msjError}</p>
      <Link to="/" className="btn-return">
        Ir al inicio
      </Link>
    </div>
  );
}