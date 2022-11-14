const attrField = {
  type: "text",
  placeholderAddText: "Agrega un texto",
};

export const homeFormFieldsSchema = {
  welcomeText: {
    type: attrField.type,
    name: "welcomeText",
    placeholder: "Texto de Bienvenida",
  },
  firstImage: {
    name: "firstImage",
  },
  secondImage: {
    name: "secondImage",
  },
  thirdImage: {
    name: "thirdImage",
  },
  firstText: {
    name: "firstText",
    type: attrField.type,
    placeholder: attrField.placeholderAddText,
  },
  secondText: {
    name: "secondText",
    type: attrField.type,
    placeholder: attrField.placeholderAddText,
  },
  thirdText: {
    name: "thirdText",
    type: attrField.type,
    placeholder: attrField.placeholderAddText,
  },
  editBtn: {
    type: "submit",
    text: "Editar",
    style: "yellow",
  },
};
