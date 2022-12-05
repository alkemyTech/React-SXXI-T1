import * as Yup from "yup";

const required = "Campo obligatorio";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required(required),
  email: Yup.string().email("Debe ser un email valido").required(required),
  phone: Yup.string().min(8, "Debe contener al menos 8 digitos").matches(phoneRegExp, "Debe ser un numero de telefono valido").required(required),
  message: Yup.string().required(required),
});

export const setValueAndTouch = (setFieldValue, setTouched) => {
  setFieldValue("fullname", "");
  setFieldValue("email", "");
  setFieldValue("phone", "");
  setFieldValue("message", "");
  setTouched("fullname", false);
  setTouched("email", false);
  setTouched("phone", false);
  setTouched("message", false);
};
