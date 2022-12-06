import * as Yup from "yup";

const SUPPORTED_IMAGE_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const SUPPORTED_EXTENSIONS = [".jpg", ".png", ".jpeg"];

function validateFileFormats(file, supportedFormatsArray) {
  let isValid = supportedFormatsArray.includes(file.type);

  if (!isValid && typeof file === "string") {
    isValid = SUPPORTED_EXTENSIONS.some((ext) => file.includes(ext));
  }

  return isValid;
}

function isEmptyObject(obj) {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
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
        const isValid = validateFileFormats(file, SUPPORTED_IMAGE_FORMATS);
        return isValid;
      },
    }),
  shortDescription: Yup.string().required("La descripción corta es obligatoria"),
  longDescription: Yup.string().required("La descripción larga es obligatoria"),
  socialMediaLinks: Yup.array().of(Yup.string().url()),
});

export const EditMembersSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio").min(4, "El nombre debe tener al menos 4 caracteres"),
  image: Yup.mixed()
    .test({
      message: "La imagen es obligatoria",
      test: (file, context) => {
        const isValid = !isEmptyObject(file);
        return isValid;
      },
    })
    .test({
      message: "La imagen debe tener un formato .png o .jpg",
      test: (file, context) => {
        const isValid = validateFileFormats(file, SUPPORTED_IMAGE_FORMATS);
        return isValid;
      },
    }),
  description: Yup.string().required("La descripción es obligatoria"),
  socialMediaLinks: Yup.array().of(Yup.string().url()).min(1, "El link de red social es obligatorio"),
});

export const SocialMediaLinkSchema = Yup.object().shape({
  socialMediaLink: Yup.string().required("Ingrese una url").url("Ingrese una url válida"),
});
