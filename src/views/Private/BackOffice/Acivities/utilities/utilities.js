import * as Yup from "yup";
import { validationMessages } from "utilities/validationMessage.util";
import { FILE_SIZE } from "Components/FormImageField/utilities/ImageFieldSchemas.util";

const FORMAT = ["image/png", "image/jpg", "image/jpeg"];

export const activityValidationSchema = (id) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(4, validationMessages.name.fieldLength).required(validationMessages.name.required),
    image: Yup.mixed()
      .test("format", validationMessages.image.format, (value) => {
        return id ? value : value && FORMAT.includes(value.type);
      })
      .test("fileSize", validationMessages.image.fieldSize, (value) => (id ? value : value && value.size <= FILE_SIZE))
      .required(validationMessages.image.required),
    description: Yup.string().required(validationMessages.description.required),
  });

  return validationSchema;
};

export const convertToBase64 = (image, setImage) => {
  const reader = new FileReader();

  reader.onloadend = function () {
    setImage(reader.result.toString());
  };

  reader.readAsDataURL(image);
};
