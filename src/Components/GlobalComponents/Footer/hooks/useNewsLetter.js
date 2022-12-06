import { useFormik } from "formik";
import * as yup from "yup";
import { persistLocalStorage } from "utilities/localStorage.util";
import { valuesSchema } from "../utilities/newsLetterSchemas.util";
import { validationMessages } from "utilities/validationMessage.util";

export const useNewsLetter = (handleNewsLetter) => {
  const initialValues = valuesSchema;

  const validationSchema = () => {
    const validateFormFields = yup.object().shape({
      email: yup.string().email(validationMessages.email.format).required(validationMessages.email.required),
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
