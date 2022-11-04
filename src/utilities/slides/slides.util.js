// use to create, edit and show slides

const PERSONAL_ORDER = 100000000;

const personalSlides = (arraySlides) =>
  arraySlides.filter((slide) => slide.order >= PERSONAL_ORDER);

const maxOrder = (arrayPersonalSlides) => {
  return Math.max(
    ...arrayPersonalSlides
      .filter((slide) => slide.order)
      .map((slide) => slide.order)
  );
};

const getMaxOrder = (arrayPersonalSlides) => {
  const max = maxOrder(arrayPersonalSlides);

  return max > PERSONAL_ORDER ? max + 1 : PERSONAL_ORDER;
};
export { PERSONAL_ORDER, personalSlides, getMaxOrder };
