export const getIndexSlide = (arraySlide, idSlide) =>
  arraySlide?.findIndex((slice) => slice.id === parseInt(idSlide));
