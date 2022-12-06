// use to create, edit and show slides

const PERSONAL_ORDER = 100000000;

const personalSlides = (arraySlides) => {
  const filterArray = arraySlides.filter((slide) => slide.order >= PERSONAL_ORDER);

  let hashOrders = {};
  const arrayWithoutOrderRepeat = filterArray.filter((item) => (hashOrders[item.order] ? false : (hashOrders[item.order] = true)));

  return ascendOrderArray(arrayWithoutOrderRepeat);
};

const maxOrder = (arrayPersonalSlides) => {
  return Math.max(...arrayPersonalSlides.filter((slide) => slide.order).map((slide) => slide.order));
};

const getMaxOrder = (arrayPersonalSlides) => {
  const max = maxOrder(arrayPersonalSlides);
  return max >= PERSONAL_ORDER ? max + 1 : PERSONAL_ORDER;
};

const ascendOrderArray = (array) => array.sort((a, b) => a.order - b.order);

export { PERSONAL_ORDER, personalSlides, getMaxOrder, ascendOrderArray };
