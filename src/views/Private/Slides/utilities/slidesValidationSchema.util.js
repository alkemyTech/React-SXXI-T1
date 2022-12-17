import * as yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE, SUPPORTED_FORMATS } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

export const slidesValidationSchema = (orderFieldDisabled, maxSlideOrder, idSlide) => {
  const validateFormFields = yup.object().shape({
    name: yup.string().min(4, validationMessages.name.fieldLength).required(validationMessages.name.required),
    description: yup.string().required(validationMessages.description.required),
    order: yup.number().when([], {
      is: () => !orderFieldDisabled,
      then: yup
        .number()
        .positive()
        .min(maxSlideOrder, validationMessages.order.fieldLength + maxSlideOrder)
        .test("dontEdit", validationMessages.order.dontEdit, (value) => {
          return false;
        })
        .required(validationMessages.order.required),
      otherwise: yup
        .number()
        .min(maxSlideOrder, validationMessages.order.fieldLength + maxSlideOrder)
        .notRequired(),
    }),
    image: yup
      .mixed()
      .nullable()
      .required(validationMessages.image.required)
      .test("format", validationMessages.image.format, (value) => {
        if (idSlide && value) {
          if (typeof value === "string") return value;
        }
        return value && SUPPORTED_FORMATS.includes(value.type);
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => {
        if (idSlide && value) {
          if (typeof value === "string") return value;
        }
        return value && value.size <= FILE_SIZE;
      }),
  });

  return validateFormFields;
};
