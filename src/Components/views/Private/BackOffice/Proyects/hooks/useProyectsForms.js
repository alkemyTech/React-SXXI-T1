import { useFormik } from "formik";
import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

export const useProyectsForms = () => {

  const validationSchema = Yup.object().shape({
    title : Yup.string().required(validationMessages.title.required),
    description: Yup.string()
      .required(validationMessages.description.required)
      .max(255, validationMessages.description.fieldLength),
    image: Yup.string()
      .required(validationMessages.image.required)
      .oneOf(
        ["image/png", "image/jpg"],
        "El formato de la imagen tiene que ser jpg, 0 png"
      ),
    date: Yup.string().required(validationMessages.date.required)
  });

  const initialValues = {
    title: '',
    description: '',
    image: '',
    date:''
  };

  const onSubmit = () => {
    console.log(formik.values);
  }

  const formik = useFormik({initialValues, onSubmit, validationSchema});

  const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

  return {values, errors, handleBlur, handleSubmit, handleChange, touched}

}