export const filterNews = (array) => {
  return array.filter((item) => item.name && item.content && item.image);
};
