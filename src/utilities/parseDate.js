const toLocaleString = (date, type) => {
  const datesTypes = {
    splice() {
      return new Date(date).toLocaleString().split(",")[0];
    },
    full() {
      return new Date(date).toLocaleString();
    },
  };

  return datesTypes[type]();
};

export const parseDate = { toLocaleString };
