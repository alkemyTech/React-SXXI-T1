export const validationMessages = {
  fullname: {
    required: "El campo fullname es obligatorio",
    format: "El campo fullname solo puede contener letras",
  },
  phone: {
    required: "El campo phone es obligatorio",
    format: "El campo phone debe tener un formato de teléfono válido",
    fieldLength: "El campo phone debe contener al menos 8 digitos",
  },
  message: {
    required: "El campo message es obligatorio",
  },
  email: {
    required: "El campo email es obligatorio",
    format: "El campo email debe tener un formato de email válido",
  },
  image: {
    required: "El campo image es obligatorio",
    format: "El formato debe ser png o jpg",
    fieldSize: "La imagen debe tener menos de 2MB",
  },
  name: {
    required: "El campo name es obligatorio",
    fieldLength: "El campo name debe contener al menos 4 caracteres",
    format: "El campo name solo puede contener letras",
  },
  order: {
    required: "El campo order es obligatorio",
    fieldLength: "El campo order debe contener un número mayor que ",
    dontEdit: "No puedes modificar este campo",
  },
  description: {
    required: "El campo description es obligatorio",
    fieldLength:
      "El campo description debe contener como maximo 255 caracteres",
  },
  welcomeText: {
    required: "El campo welcome es obligatorio",
    fieldLength: "El campo welcome debe contener al menos 20 caracteres",
  },
};
