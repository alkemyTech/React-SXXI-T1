import { privateRoutes } from "models/routes";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userReset } from "redux/states/user";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { clearLocalStorage } from "utilities/localStorage.util";
import { headerSchemas } from "../utilities/headearSchemas.util";
const { REACT_APP_USER_TOKEN: USERTOKEN } = process.env;

export const useDropDown = () => {
  const navigate = useNavigate();

  const {
    user: { email, image, id },
  } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    const logoutConfirm = await handleUserConfirm(headerSchemas.confirmLogoutText);

    if (logoutConfirm) {
      clearLocalStorage(USERTOKEN);
      dispatch(userReset());
    }
  };

  const handleupdateProfile = () => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  return { email, image, handleLogout, handleupdateProfile };
};
