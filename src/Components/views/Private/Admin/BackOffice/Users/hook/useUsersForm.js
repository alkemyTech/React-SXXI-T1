import { useFormik } from "formik";
import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

export const useUsersForm = () => {
  const nameRegExp = /[a-z, A-Z]{4}/
  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const validationSchema = Yup.object().shape({
    name : Yup.string()
      .min(4, validationMessages.name.fieldLength)
      .matches(nameRegExp, validationMessages.name.format)
      .required(validationMessages.name.required),
    email: Yup.string().matches(emailRegExp, validationMessages.email.format)
      .required(validationMessages.email.required),
    profilephoto: Yup.string()
      .required(validationMessages.profilephoto.required)
      .oneOf(
        ["image/png", "image/jpg"],
        "El formato de la imagen tiene que ser jpg, 0 png"
      ),
    rol: Yup.string().required(validationMessages.rol.required),
    password: Yup.string().min(8, validationMessages.password.fieldLength)
      .required(validationMessages.password.required)
  });

  const initialValues = {
    name: '',
    email: '',
    profilephoto: '',
    rol: '',
    password: ''
  };

  const onSubmit = () => {
    console.log(formik.values);
  }

  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

  return {values, errors, handleBlur, handleSubmit, handleChange, touched}
}