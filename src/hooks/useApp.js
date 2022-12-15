import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLocalStorage } from "utilities/localStorage.util";
import axios from "axios";

export const useApp = () => {
  const [returnToHome, setReturnToHome] = useState(false);

  const {
    user: {
      role: { type },
    },
  } = useSelector((store) => store.user);

  useEffect(() => {
    if (type) axios.defaults.headers.common["Authorization"] = getLocalStorage("USERPERSIST");
    else axios.defaults.headers.common["Authorization"] = "";
  }, [type]);

  return { type, returnToHome, setReturnToHome };
};
