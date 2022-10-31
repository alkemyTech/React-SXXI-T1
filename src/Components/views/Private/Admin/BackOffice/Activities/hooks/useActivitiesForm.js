import { useFormik } from "formik";
import * as Yup from 'yup';
import { validationMessages } from 'utilities/validationMessage.util';

export const useActivitiesForm = () => {
  const nameRegExp = /[a-z, A-Z]{4}/
    const validationSchema = Yup.object().shape({
        name : Yup.string()
          .min(4, validationMessages.name.fieldLength)
          .matches(nameRegExp, validationMessages.name.format)
          .required(validationMessages.name.required),
        description: Yup.string()
          .required(validationMessages.description.required)
          .max(255, validationMessages.description.fieldLength),
        image: Yup.string()
          .required(validationMessages.image.required)
          .oneOf(
            ["image/png", "image/jpg"],
            "El formato de la imagen tiene que ser jpg, 0 png"
          )
    });

    const initialValues = {
        name: '',
        description: '',
        image: ''
    };

    const onSubmit = () => {
        console.log(formik.values);
    }

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    const {values, errors, handleBlur, handleSubmit, handleChange, touched} = formik;

    return {values, errors, handleBlur, handleSubmit, handleChange, touched}

}