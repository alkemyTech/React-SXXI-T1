export const validationMessages = {
  category_id: {
    required: "El campo categoría id es obligatorio",
  },
  content: {
    required: "El campo contenido es obligatorio",
  },
  description: {
    required: "El campo descripción es obligatorio",
    fieldLength: "El campo descripción debe contener como maximo 255 caracteres",
  },
  due_date: {
    required: "El campo es obligatorio",
  },
  email: {
    required: "El campo email es obligatorio",
    format: "El campo email debe tener un formato de email válido",
  },
  fullname: {
    required: "El campo nombre es obligatorio",
    format: "El campo nombre solo puede contener letras",
  },
  image: {
    required: "El campo imagen es obligatorio",
    format: "El formato debe ser png o jpg",
    fieldSize: "La imagen debe tener menos de 2MB",
  },
  message: {
    required: "El campo mensaje es obligatorio",
  },
  name: {
    required: "El campo nombre es obligatorio",
    fieldLength: "El campo nombre debe contener al menos 4 caracteres",
    format: "El campo nombre solo puede contener letras",
  },
  order: {
    required: "El campo orden es obligatorio",
    fieldLength: "El campo orden debe contener un número mayor que ",
    dontEdit: "No puedes modificar este campo",
  },
  phone: {
    required: "El campo teléfono es obligatorio",
    format: "El campo teléfono debe tener un formato de teléfono válido",
    fieldLength: "El campo teléfono debe contener al menos 8 digitos",
  },
  password: {
    required: "El campo contraseña es obligatorio",
    fieldLength: "El campo contraseña debe contener al menos 8 caracteres",
  },
  profile_photo: {
    required: "El campo imagen de perfil es obligatorio",
    format: "El formato debe ser png, jpg o jpeg",
  },
  role_id: {
    required: "El campo rol id es obligatorio",
  },
  title: {
    required: "El campo titulo es obligatorio",
  },
  welcomeText: {
    required: "El campo bienvenido es obligatorio",
    fieldLength: "El campo bienvenido debe contener al menos 20 caracteres",
  },
}
