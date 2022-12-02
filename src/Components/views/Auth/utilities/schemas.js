import { privateRoutes, routes } from "models/routes";
import publicService from "Services/publicApiService";
import { URLs } from "Services/ServicesURLS";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import * as Yup from "yup";

const REGEX_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("El email es obligatorio").email("El email ingresado no es válido"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(REGEX_PASSWORD, "La contraseña debe tener al menos 1 letra, 1 número y 1 símbolo"),
});

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().required("El email es obligatorio").email("El email ingresado no es válido"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(REGEX_PASSWORD, "La contraseña debe tener al menos 1 letra, 1 número y 1 símbolo"),
  confirmPassword: Yup.string()
    .required("La confirmación de contraseña es obligatoria")
    .oneOf([Yup.ref("password"), null], "Las contraseñas ingresadas no coinciden"),
});

export const authSchemas = {
  login: {
    buttonText: "Iniciar sesión",
    linkText: "No tienes cuenta? Registrate",
    toLink: routes.AUTHREGISTERFORM + "?auth=register",
  },
  register: {
    buttonText: "Registrar",
    linkText: "Ya tienes cuenta? Inicia sesión",
    toLink: routes.AUTHLOGINFORM + "?auth=login",
  },
};

export const roleUser = async (id) => {
  try {
    let role = {};

    const fetchRoles = await publicService.get(URLs.role + "/" + id);

    if (!fetchRoles) throw new Error(requestMessagesSchema.problemExistTryLater);

    if (!fetchRoles.success) return (role = { type: undefined });

    const redirect = fetchRoles.data.description.toLowerCase() === "admin" ? privateRoutes.BACKOFFICE : routes.HOME;

    role = { id: fetchRoles.data.id, type: fetchRoles.data.description.toLowerCase(), to: redirect };

    return role;
  } catch (error) {
    console.error("error auth schemas", error.message);
  }
};
