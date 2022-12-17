import * as Yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

const FORMAT = ["image/png", "image/jpg", "image/jpeg"];

export const projectsValidationSchema = (id) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(validationMessages.title.required),
    description: Yup.string().required(validationMessages.description.required),
    image: Yup.mixed()
      .test("format", validationMessages.image.format, (value) => {
        return id ? value : value && FORMAT.includes(value.type);
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (id ? value : value && value.size <= FILE_SIZE))
      .required(validationMessages.image.required),
    due_date: Yup.string().required(validationMessages.due_date.required),
  });

  return validationSchema;
};
