import * as yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE, SUPPORTED_FORMATS } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

export const homeValidationSchema = () => {
  const validateFormFields = yup.object().shape({
    welcomeText: yup.string().min(20, validationMessages.welcomeText.fieldLength).required(validationMessages.welcomeText.required),
    firstImage: yup
      .mixed()
      .nullable()
      .test("format", validationMessages.image.format, (value) => {
        return value ? SUPPORTED_FORMATS.includes(value.type) : true;
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (value ? value.size <= FILE_SIZE : true)),
    secondImage: yup
      .mixed()
      .nullable()
      .test("format", validationMessages.image.format, (value) => {
        return value ? SUPPORTED_FORMATS.includes(value.type) : true;
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (value ? value.size <= FILE_SIZE : true)),
    thirdImage: yup
      .mixed()
      .nullable()
      .test("format", validationMessages.image.format, (value) => {
        return value ? SUPPORTED_FORMATS.includes(value.type) : true;
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (value ? value.size <= FILE_SIZE : true)),
  });

  return validateFormFields;
};
