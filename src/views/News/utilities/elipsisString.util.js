const elipsisString = ({ str, len = 48 }) => {
  if (str.length > len) return { string: str.slice(0, len - 3).concat("...") }
  return { string: str }
}

export { elipsisString }
