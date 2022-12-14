import { routes } from "models/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePageNotFound = () => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(5);

  const handleRedirectToHome = () => {
    navigate(routes.HOME, { replace: true });
  };

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate(routes.HOME, { replace: true });
    }, 5000);

    return () => {
      clearTimeout(redirect);
    };
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      seconds > 0 && setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return { seconds, handleRedirectToHome };
};
