import { routes } from "models/routes";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const checkAuthorization = (role) => (role === "admin" ? <Outlet /> : <Navigate replace to={routes.HOME} />);

const AuthGuard = () => {
  const { user } = useSelector((store) => store.user);
  return user.role.type ? checkAuthorization(user.role.type) : <Navigate replace to={routes.AUTHLOGINFORM + "?auth=login"} />;
};

export default AuthGuard;
