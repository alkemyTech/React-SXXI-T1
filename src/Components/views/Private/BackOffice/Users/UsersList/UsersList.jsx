import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import SearchUsers from "./components/SearchUsers";
import { useUsers } from "./hooks/useUsers";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { useState } from "react";

const UsersList = () => {
  const navigate = useNavigate();
  const { loadingUsers, usersData, fetchUsers, setSearchUser, setRol } = useUsers();
  const [loading, setLoading] = useState(false);
  const tHead = ["#", "Nombre", "Email", "Acciones"];
  const myTableData = { name: "name", email: "email" };

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const find = usersData.find((el) => id === el.id);
    if (find) {
      const response = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);
      if (response) {
        setLoading(true);
        const userDeleted = await privateService.deleted(URLs.users, id);
        if (userDeleted.success) {
          feedbackUser("center", "success", "Usuario eliminado");
          fetchUsers();
        } else {
          feedbackUser("center", "error", "No se eliminó el usuario");
        }
      }
      setLoading(false);
    }
  };

  const searchUsersHandler = async (text) => {
    if (text.length >= 2) setSearchUser(text);
    else setSearchUser("");
  };

  const selectRolHandler = async (rol) => {
    if (rol === "1") setRol(rol);
    if (rol === "2") setRol(rol);
    if (rol === "") setRol(rol);
  };

  let usersContent;
  if (loadingUsers || loading) {
    usersContent = <SpinnerLoad />;
  } else {
    usersContent =
      usersData.length > 0 ? (
        <CustomTable tHead={tHead} tBody={usersData} myTableData={myTableData} handleEdit={editHandler} handleDelete={deleteHandler} />
      ) : (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text="No se encontro el usuario" />
        </div>
      );
  }

  return (
    <div>
      <div className="mt-2 d-flex col col-12">
        <CustomTitle title="Usuarios" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo wrapLink="col col-10 col-sm-5 col-md-4 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Usuario"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.USERSCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchUsers onSearchUsers={searchUsersHandler} selectRol={selectRolHandler} />
      </div>
      <div className="my-3">{usersContent}</div>
    </div>
  );
};

export default UsersList;
