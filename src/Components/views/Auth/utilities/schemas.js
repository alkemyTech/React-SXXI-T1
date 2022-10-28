import * as Yup from "yup";

const REGEX_PASSWORD =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("El email es obligatorio")
    .email("El email ingresado no es válido"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      REGEX_PASSWORD,
      "La contraseña debe tener al menos 1 letra, 1 número y 1 símbolo"
    ),
});
