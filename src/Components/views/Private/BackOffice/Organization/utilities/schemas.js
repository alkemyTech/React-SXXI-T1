import * as Yup from "yup";

const SUPPORTED_LOGO_FORMATS = ["image/jpg", "image/png"];

export function validateFileFormats(file, supportedFormatsArray) {
  let isValid = supportedFormatsArray.includes(file.type);
  return isValid;
}

export const EditOrganizationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  logo: Yup.mixed()
    .required("El logo es obligatorio")
    .test({
      message: "El logo debe tener un formato .png o .jpg",
      test: (file, context) => {
        const isValid = validateFileFormats(file, SUPPORTED_LOGO_FORMATS);
        if (!isValid) context?.createError();
        return isValid;
      },
    }),
  shortDescription: Yup.string().required(
    "La descripción corta es obligatoria"
  ),
  longDescription: Yup.string().required("La descripción larga es obligatoria"),
  socialMediaLinks: Yup.array().of(Yup.string().url()),
});

export const LinkSchema = Yup.object().shape({
  socialMediaLink: Yup.string().url("Ingrese una url válida"),
});
