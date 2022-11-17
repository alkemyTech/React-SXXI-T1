import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';
import { FILE_SIZE } from 'Components/GlobalComponents/FormImageField/utilities/ImageFieldSchemas.util';

const FORMAT = ['image/png', 'image/jpg', 'image/jpeg'];
const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

export const usersValidationSchema = (
  id
) => {
  const validationSchema = Yup.object().shape({
    name : Yup.string()
            .min(4, validationMessages.name.fieldLength)
            .required(validationMessages.name.required),
    email: Yup.string().matches(emailRegExp, validationMessages.email.format)
            .required(validationMessages.email.required),
    role_id: Yup.string().required(validationMessages.role_id.required),
    image: Yup.mixed()
            .test("format", validationMessages.image.format, (value) => {
              return id
                ? value
                : value && FORMAT.includes(value.type);
              })
            .test(
              "fileSize", 
              validationMessages.image.fieldSize,
              (value) =>
                id ? value : value && value.size <= FILE_SIZE
            )
            .required(validationMessages.image.required),
    password: Yup.string().min(8, validationMessages.password.fieldLength)
            .required(validationMessages.password.required),
  });

  return validationSchema;
}