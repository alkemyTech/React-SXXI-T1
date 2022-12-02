import { Spinner } from "react-bootstrap";

export const SpinnerGrow = ({ animation = "grow", variant = "secondary" }) => {
  return (
    <>
      <Spinner animation={animation} variant={variant} role="status" />
      <span className="visually-hidden">Cargando...</span>
    </>
  );
};
