import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import SearchUsers from "./components/SearchUsers";
import { useUsers } from "./hooks/useUsers";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";

const UsersList = () => {
  const navigate = useNavigate();
  const { loadingUsers, usersData, fetchUsers, setSearchUser, setRol, usersDataToRender, setLoadingUsers } = useUsers();

  const tHead = ["#", "Nombre", "Email", "Acciones"];
  const myTableData = { name: "name", email: "email" };

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    try {
      const find = usersData.find((el) => id === el.id);
      if (find) {
        const response = await AlertWarning(`¿Estas segura/o que deseas eliminar "${find.name}"?`);

        if (response) {
          setLoadingUsers(true);
          const userDeleted = await privateService.deleted(URLs.users, id);
          if (!userDeleted || !userDeleted.success) throw new Error(userDeleted.message);

          feedbackUser("top-end", "success", "Usuario eliminado");

          fetchUsers();
        }
      }
    } catch (error) {
      console.error("error", error.message);
      feedbackUser("top-end", "error", "No se eliminó el usuario");
    } finally {
      setLoadingUsers(false);
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

  return (
    <div>
      <div className="mt-2 d-flex col col-12">
        <CustomTitle title="Usuarios" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-3 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Usuario"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.USERSCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchUsers onSearchUsers={searchUsersHandler} selectRol={selectRolHandler} disabled={!usersData.length} />
      </div>

      <CustomTable
        tHead={tHead}
        tBody={usersDataToRender}
        myTableData={myTableData}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
        loading={loadingUsers}
      />

      {!loadingUsers && !usersDataToRender.length && (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text="Sin usuarios para mostrar" />
        </div>
      )}
    </div>
  );
};

export default UsersList;
