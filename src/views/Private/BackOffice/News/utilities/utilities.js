import * as Yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

const FORMAT = ["image/png", "image/jpg", "image/jpeg"];

export const newsValidationSchema = (id) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4, validationMessages.name.fieldLength).required(validationMessages.name.required),
    content: Yup.string().required(validationMessages.content.required),
    category_id: Yup.string().required(validationMessages.category_id.required),
    image: Yup.mixed()
      .test("format", validationMessages.image.format, (value) => {
        return id ? value : value && FORMAT.includes(value.type);
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (id ? value : value && value.size <= FILE_SIZE))
      .required(validationMessages.image.required),
  });

  return validationSchema;
};

export const filterNews = (array) => {
  return array.filter((item) => item.name && item.content && item.image);
};
