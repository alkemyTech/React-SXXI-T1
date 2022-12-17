import { addIcon } from "assets/images";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomTable } from "Components/CustomTable/CustomTable";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import SearchUsers from "./components/SearchUsers";
import { useUsers } from "./hooks/useUsers";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";

const UsersList = () => {
  const { users, editHandler, selectRolHandler, searchUsersHandler, deleteHandler, tHead, myTableData } = useUsers();

  let content;
  if (users.status === "error") {
    content = (
      <div className="col col-12 d-flex justify-content-center">
        <CustomAlertMessage alertClass="col col-10" text="Ha ocurrido un error al mostrar los usuarios" />
      </div>
    );
  } else {
    content = users.users.length ? (
      <CustomTable
        tHead={tHead}
        tBody={users.users}
        myTableData={myTableData}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
        loading={users.status === "success" ? false : true}
      />
    ) : (
      <div className="col col-12 d-flex justify-content-center">
        <CustomAlertMessage alertClass="col col-10" text="Sin usuarios para mostrar" />
      </div>
    );
  }

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
        <SearchUsers onSearchUsers={searchUsersHandler} selectRol={selectRolHandler} disabled={users.status === "error"} />
      </div>
      <div>{content}</div>
    </div>
  );
};

export default UsersList;
