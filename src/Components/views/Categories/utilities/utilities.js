import * as Yup from "yup";

const nameRegExp = /[a-z, A-Z]/;
const FORMAT = ["image/png", "image/jpg", "image/jpeg"];
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegExp, "Debe ser un nombre valido")
    .min(4, "El nombre debe contener almenos 4 caracteres")
    .required("Campo obligatorio"),
  image: Yup.mixed()
    .test("fileFormat", "Solo formato .jpg y .png", (value) => {
      if (typeof value === "string") {
        return true;
      } else return value && FORMAT.includes(value.type);
    })
    .required("Campo obligatorio"),
  description: Yup.string().required("Campo obligatorio"),
});

export const convertToBase64 = (image, setImage) => {
  const reader = new FileReader();
  reader.readAsDataURL(image);

  reader.onloadend = function () {
    setImage(reader.result);
  };
};
