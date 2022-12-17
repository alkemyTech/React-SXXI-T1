import * as Yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE, SUPPORTED_FORMATS } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const usersValidationSchema = (userId) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4, validationMessages.name.fieldLength).required(validationMessages.name.required),
    email: Yup.string().matches(emailRegExp, validationMessages.email.format).required(validationMessages.email.required),
    role_id: Yup.string().required(validationMessages.role_id.required),
    password: Yup.string().min(6, validationMessages.password.fieldLength).required(validationMessages.password.required),
    profile_image: Yup.mixed()
      .nullable()
      .required(validationMessages.image.required)
      .test("format", validationMessages.image.format, (value) => {
        if (userId && value) {
          if (typeof value === "string") return value;
        }
        return value && SUPPORTED_FORMATS.includes(value.type);
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => {
        if (userId && value) {
          if (typeof value === "string") return value;
        }
        return value && value.size <= FILE_SIZE;
      }),
  });

  return validationSchema;
};
