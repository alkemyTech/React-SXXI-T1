import Placeholder from "react-bootstrap/Placeholder";

export const ButtonLoader = ({ animation, variant, xs, size }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Placeholder.Button animation={animation} variant={variant} xs={xs} size={size} />
    </div>
  );
};
