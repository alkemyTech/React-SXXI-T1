const elipsisString = (str) => {
  if (str.length > 48) return { string: str.slice(0, 45).concat("...") };
  return { string: str };
};

export { elipsisString };
