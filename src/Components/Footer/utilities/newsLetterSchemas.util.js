const valuesSchema = { email: "" };

const formSchema = {
  inputNewsLetterAttr: {
    type: "email",
    placeholder: "Ingresa tu email",
    name: "email",
  },
  submitButtonAttr: {
    text: "Enviar",
  },
};

const textSubscribtion = {
  subNewsLetterText: "Suscribite para recibir actualizaciones",
};

export { formSchema, textSubscribtion, valuesSchema };
