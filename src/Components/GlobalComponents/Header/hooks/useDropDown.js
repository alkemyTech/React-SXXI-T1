import { useDispatch, useSelector } from "react-redux";
import { userReset } from "redux/states/user";
import { handleUserConfirm } from "utilities/alerts/userConfirm.util";
import { clearLocalStorage } from "utilities/localStorage.util";
import { headerSchemas } from "../utilities/headearSchemas.util";
const { REACT_APP_USER_TOKEN: USERTOKEN } = process.env;

export const useDropDown = () => {
  const {
    user: { email, image },
  } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    const logoutConfirm = await handleUserConfirm(headerSchemas.confirmLogoutText);

    if (logoutConfirm) {
      clearLocalStorage(USERTOKEN);
      dispatch(userReset());
    }
  };

  return { email, image, handleLogout };
};
