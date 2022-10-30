const valuesSchema = { email: "" };

const formSchema = {
  textSubscribe: "Suscribite al NewsLetter para poder recibir actualizaciones",
  inputNewsLetterAttr: {
    type: "email",
    placeholder: "Ingresá tu correo",
    name: "email",
  },
  submitButtonAttr: {
    text: "Enviar",
  },
};

const textSubscribtion = {
  subNewsLetterText:
    "Suscribite al NewsLetter para poder recibir actualizaciones",
};

export { formSchema, textSubscribtion, valuesSchema };
