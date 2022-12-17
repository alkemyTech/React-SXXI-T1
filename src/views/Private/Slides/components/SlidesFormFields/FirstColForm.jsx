import { InputField } from "Components/FormInputsField/InputField";
import { SkeletonLoader } from "Components/Loading/SkeletonLoader/SkeletonLoader";

import { InputOrder } from "./InputOrder";

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

  const renderSkeleton = <SkeletonLoader placeClass="col col-12  w-100 h-100" spanClass="h-100 w-100" height="41px" />;

  return (
    <>
      <div className="col col-12 col-sm-5 ">{load ? renderSkeleton : <InputField formik={formik} schemas={name} />}</div>
      <div className="col col-12 col-sm-5 mt-4 mt-sm-0   ">
        {load ? (
          renderSkeleton
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
