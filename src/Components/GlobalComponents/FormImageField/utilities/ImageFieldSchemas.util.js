import { validationMessages } from "utilities/validationMessage.util";
import * as yup from "yup";

const FILE_SIZE = 200 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationImage = {
  yupFileValidation: yup
    .mixed()
    .nullable()
    .required(validationMessages.image.required)
    .test(
      "format",
      validationMessages.image.format,
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      validationMessages.image.fieldSize,
      (value) => value && value.size <= FILE_SIZE
    ),
};

export { FILE_SIZE, SUPPORTED_FORMATS, validationImage };
