import { useEffect, useState } from "react";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { requestMessagesSchema } from "utilities/requestMessagesSchema.util";
import { URLs } from "Services/ServicesURLS";
import privateService from "Services/privateApiService";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/states/usersSlice";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";

export const useUsers = () => {
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [roles, setRoles] = useState([]);
  const [rol, setRol] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const tHead = ["#", "Nombre", "Email", "Acciones"];
  const myTableData = { name: "name", email: "email" };

  const fetchUsers = async (search = "", role = "") => {
    try {
      setLoadingUsers(true);
      const queryParamsSearch = search !== "" ? "search=" + search : "";
      const queryParamsRol = role !== "" ? "role=" + role : "";
      let queryParams = "";
      if (queryParamsSearch !== "" && queryParamsRol !== "") queryParams = queryParamsSearch + "&" + queryParamsRol;
      if (queryParamsSearch !== "" && queryParamsRol === "") queryParams = queryParamsSearch;
      if (queryParamsSearch === "" && queryParamsRol !== "") queryParams = queryParamsRol;
      const queryUrl = `${URLs.users}?limit=20&${queryParams}`;
      dispatch(getUsers(queryUrl));
    } catch (error) {
      console.error("error Users", error.message);
      feedbackUser("center", "error", `${requestMessagesSchema.problemExistTryLater} ${requestMessagesSchema.contactAdmin}`);
    } finally {
      setLoadingUsers(false);
    }
  };

  const fetchRoles = async () => {
    const roles = await privateService.get(URLs.role);
    if (roles.success) {
      setRoles(roles.data);
    } else {
      feedbackUser("center", "error", "No se encontraron roles");
    }
  };

  useEffect(() => {
    fetchUsers(searchUser, rol);
    fetchRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchUser, rol]);

  const searchUsersHandler = async (text) => {
    if (text.length >= 2) setSearchUser(text);
    if (text.length === 0) setSearchUser("");
  };

  const selectRolHandler = async (selRol) => {
    setRol(selRol);
  };

  const deleteHandler = async (id) => {
    try {
      const find = users.users.find((el) => id === el.id);
      if (find) {
        const response = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);

        if (response) {
          setLoadingUsers(true);
          const userDeleted = await privateService.deleted(URLs.users, id);
          if (!userDeleted || !userDeleted.success) throw new Error(userDeleted.message);

          feedbackUser("center", "success", "Usuario eliminado");

          fetchUsers(searchUser, rol);
        }
      }
    } catch (error) {
      console.error("error", error.message);
      feedbackUser("top-end", "error", "No se eliminó el usuario");
    } finally {
      setLoadingUsers(false);
    }
  };
  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  return {
    users,
    loadingUsers,
    roles,
    rol,
    searchUser,
    setSearchUser,
    tHead,
    myTableData,
    setLoadingUsers,
    selectRolHandler,
    searchUsersHandler,
    deleteHandler,
    editHandler,
  };
};
