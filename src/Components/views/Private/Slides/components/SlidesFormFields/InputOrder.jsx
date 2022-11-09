import { CustomButton } from "Components/GlobalComponents/CustomButton/CustomButton";
import { SpanFormError } from "Components/GlobalComponents/SpanFormError/SpanFormError";
import { getIndexSlide } from "../../utilities/getIndexSlide.util";
import { Inputs } from "./Inputs";

export const InputOrder = (props) => {
  const {
    formik: { values, errors, touched },
    schemas: { name },
    disabled = false,
    slideToChangeSelected,
    orderSlide,
    idSlide,
    onClick,
  } = props;

  const textToEditOrder =
    slideToChangeSelected > 0
      ? `Se cambiará con el slide ${
          getIndexSlide(orderSlide, slideToChangeSelected) + 1
        }`
      : `Orden: ${values.order} - Editar `;

  return (
    <>
      {idSlide ? (
        <CustomButton
          buttonClass="col col-12"
          onClick={onClick}
          background="yellow"
          color="yellow"
          text={textToEditOrder}
        />
      ) : (
        <Inputs
          formik={props.formik}
          schemas={props.schemas}
          disabled={disabled}
        />
      )}

      <SpanFormError errors={errors} touched={touched} name={name} />
    </>
  );
};
