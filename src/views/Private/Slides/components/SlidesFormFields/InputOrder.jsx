import { CustomButton } from "Components/CustomButton/CustomButton";
import { InputField } from "Components/FormInputsField/InputField";
import { SpanFormError } from "Components/SpanFormError/SpanFormError";
import { getIndexSlide } from "../../utilities/getIndexSlide.util";

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
      ? `Se cambiará con el slide ${getIndexSlide(orderSlide, slideToChangeSelected) + 1}`
      : `Orden: ${values.order} - Editar `;

  return (
    <>
      {idSlide ? (
        <CustomButton buttonClass="col col-12 p-2" onClick={onClick} background="yellow" color="yellow" text={textToEditOrder} />
      ) : (
        <InputField formik={props.formik} schemas={props.schemas} disabled={disabled} />
      )}

      <SpanFormError errors={errors} touched={touched} name={name} />
    </>
  );
};
