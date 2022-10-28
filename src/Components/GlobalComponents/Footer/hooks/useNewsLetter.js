import { useFormik } from "formik";
import * as yup from "yup";
import { persistLocalStorage } from "utilities/localStorage.util";
import {
  validationMessages,
  valuesSchema,
} from "../utilities/newsLetterSchemas.util";

export const useNewsLetter = (handleNewsLetter) => {
  const initialValues = valuesSchema;

  const validationSchema = () => {
    const required = validationMessages.required;
    const validateFormFields = yup.object().shape({
      email: yup
        .string()
        .email(validationMessages.email.validate)
        .required(required),
    });

    return validateFormFields;
  };

  const onSubmit = () => {
    persistLocalStorage("newsLetter", formik.values);
    handleNewsLetter(true);
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return { formik };
};
