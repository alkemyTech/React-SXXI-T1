import { useState } from "react";
import { getLocalStorage } from "utilities/localStorage.util";

export const useShowNewsLetter = () => {
  const [newsLetter, setNewsLetter] = useState(!!getLocalStorage("newsLetter"));

  const handleNewsLetter = (value) => setNewsLetter(value);

  return { handleNewsLetter, newsLetter };
};
