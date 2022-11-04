import * as Yup from "yup";

const SUPPORTED_LOGO_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

function validateFileFormats(file, supportedFormatsArray) {
  let isValid = supportedFormatsArray.includes(file.type);
  return isValid;
}

function isEmptyObject(obj) {
  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
}

export const EditOrganizationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  logo: Yup.mixed()
    .test({
      message: "El logo es obligatorio",
      test: (file, context) => {
        const isValid = !isEmptyObject(file);
        return isValid;
      },
    })
    .test({
      message: "El logo debe tener un formato .png o .jpg",
      test: (file, context) => {
        const isValid = validateFileFormats(file, SUPPORTED_LOGO_FORMATS);
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
