import { routes } from "models/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useComponentErrorView = (where, setReturnToHome) => {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(5);

  const handleRedirectToHome = () => {
    if (where) setReturnToHome(true);
    navigate(routes.HOME, { replace: true });
  };

  useEffect(() => {
    const redirect = setTimeout(() => {
      if (where) setReturnToHome(true);
      navigate(routes.HOME, { replace: true });
    }, 5000);

    return () => {
      clearTimeout(redirect);
    };
  }, [navigate, where, setReturnToHome]);

  useEffect(() => {
    const interval = setInterval(() => {
      seconds > 0 && setSeconds((seconds) => seconds - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  useEffect(() => {
    if (where) setReturnToHome(false);
    return () => {
      if (where) setReturnToHome(false);
    };
  }, [setReturnToHome, where]);

  return { seconds, handleRedirectToHome };
};
