import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { privateRoutes } from "models/routes"
import { useNavigate } from "react-router-dom"
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util"
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util"

const DUMMY_USERS = [
  { id: 1, name: "User 1", email: "email1@email.com" },
  { id: 2, name: "User 2", email: "email2@email.com" },
  { id: 3, name: "User 3", email: "email3@email.com" },
  { id: 4, name: "User 4", email: "email4@email.com" },
  { id: 5, name: "User 5", email: "email5@email.com" },
  { id: 6, name: "User 6", email: "email6@email.com" }
];

const UsersList = () => {
  const navigate = useNavigate();

  const tHead = [ "#", "Nombre", "Email", "Acciones" ];

  const myTableData = { name: "name", email: "email" };

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const response = await AlertWarning("¿Estas segura/o que deseas eliminar?");
    if(response) await AlertSuccess("center", "success", "Usuario eliminado");
  };

  return (
    <section>
      <div className=" mt-4 d-flex col col-12">
        <CustomTitle
          title="Usuarios"
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="h-auto"
        />
      </div>
      <div className="my-4 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
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
        <CustomTable
          tHead={ tHead }
          tBody={DUMMY_USERS}
          myTableData={ myTableData}
          handleEdit={ editHandler }
          handleDelete={ deleteHandler }
        />
      </div>
    </section>
  );
};

export default UsersList;