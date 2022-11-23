import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";
import { routes } from "models/routes";
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
  console.log("auth guard");
  const [authLoading, setAuthLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAuth(true);
      setAuthLoading(false);
    }, 500);
  }, []);

  if (authLoading)
    return (
      <div>
        <SpinnerLoad />
      </div>
    );

  return isAuth ? <Outlet />
                : <Navigate replace to={routes.HOME} />;
};

export default AuthGuard;
