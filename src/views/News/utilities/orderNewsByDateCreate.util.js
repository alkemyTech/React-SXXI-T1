export const orderNewsByDateCreate = (daysArray) => {
  return daysArray.sort((prev, next) => {
    if (prev.created_at > next.created_at) {
      return -1;
    }
    return 0;
  });
};
