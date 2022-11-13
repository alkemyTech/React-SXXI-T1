export const validationMessages = {
  category_id: {
    required: "El campo category id es obligatorio",
  },
  content: {
    required: "El campo content es obligatorio",
  },
  description: {
    required: "El campo description es obligatorio",
    fieldLength: "El campo description debe contener como maximo 255 caracteres",
  },
  due_date: {
    required: "El campo due_date es obligatorio",
  },
  email: {
    required: "El campo email es obligatorio",
    format: "El campo email debe tener un formato de email válido",
  },
  fullname: {
    required: "El campo fullname es obligatorio",
    format: "El campo fullname solo puede contener letras",
  },
  image: {
    required: "El campo image es obligatorio",
    format: "El formato debe ser png o jpg",
    fieldSize: "La imagen debe tener menos de 2MB",
  },
  message: {
    required: "El campo message es obligatorio",
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
  phone: {
    required: "El campo phone es obligatorio",
    format: "El campo phone debe tener un formato de teléfono válido",
    fieldLength: "El campo phone debe contener al menos 8 digitos",
  },
  password: {
    required: "El campo password es obligatorio",
    fieldLength: "El campo password debe contener al menos 8 caracteres",
  },
  profile_photo: {
    required: "El campo imagen de perfil es obligatorio",
    format: "El formato debe ser png, jpg o jpeg",
  },
  role_id: {
    required: "El campo rol id es obligatorio",
  },
  title: {
    required: "El campo title es obligatorio",
  },
  welcomeText: {
    required: "El campo welcome es obligatorio",
    fieldLength: "El campo welcome debe contener al menos 20 caracteres",
  }
};
