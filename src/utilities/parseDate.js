const toLocaleString = (date, type) => {
  const datesTypes = {
    splice() {
      return new Date(date).toLocaleString().split(",")[0];
    },
    full() {
      return new Date(date).toLocaleString();
    },
  };

  return datesTypes[type]() || datesTypes["full"]();
};

export const whatIs = (itIs, data, type, nameAttr) => {
  const dataType = {
    isArray: (data, type) => data.map((item) => ({ ...item, [nameAttr]: toLocaleString(item[nameAttr], type) })),
    isString: (data, type) => toLocaleString(data, type),
  };

  return dataType[itIs](data, type);
};
