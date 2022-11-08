import { Spinner } from "react-bootstrap";
import { InputOrder } from "./InputOrder";
import { Inputs } from "./Inputs";

export const FirstColForm = (props) => {
  const {
    formik,
    schemas: { name, order },
    disabled = false,
    slideToChangeSelected,
    orderSlide,
    idSlide,
    load,
    onClick,
  } = props;
  return (
    <>
      <div className="col col-12 col-sm-5">
        <Inputs formik={formik} schemas={name} />
      </div>
      <div className="col col-12 col-sm-5 mt-3 mt-sm-0">
        {load ? (
          <Spinner animation="grow" variant="primary" />
        ) : (
          <InputOrder
            formik={formik}
            schemas={order}
            disabled={disabled}
            idSlide={idSlide}
            orderSlide={orderSlide}
            onClick={onClick}
            slideToChangeSelected={slideToChangeSelected}
          />
        )}
      </div>
    </>
  );
};
