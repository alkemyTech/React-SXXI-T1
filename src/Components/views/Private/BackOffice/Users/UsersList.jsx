import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";

const DUMMY_USERS = [
  {
    id: 1,
    name: "User 1",
    email: "email1@email.com",
  },
  {
    id: 2,
    name: "User 2",
    email: "email2@email.com",
  },
  {
    id: 3,
    name: "User 3",
    email: "email3@email.com",
  },
];

const UsersList = () => {
  const navigate = useNavigate();

  const editHandler = (id) => {
    console.log("Edit clicked", id);
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`);
  };

  const deleteHandler = (id) => {
    console.log("Delete clicked", id);
  };

  return (
    <div className="my-5">
      <CustomTitle
        title="Listado de Usuarios"
        justify="center"
        wrapTextClass="text-center"
        wrapTitleClass="h-auto"
      />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo
          wrapLink="col-sm-8 col-md-5 col-lg-4 mb-3 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
        />
        <BackTo
          wrapLink="col-sm-8 col-md-5 col-lg-4 mb-3"
          text="Crear Usuario"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.USERSCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="mt-5">
        <CustomTable
          tHead={[ "#", "Nombre", "Email", "Acciones" ]}
          tBody={DUMMY_USERS}
          myTableData={{ name: "name", email: "email" }}
          handleEdit={ editHandler }
          handleDelete={ deleteHandler }
        />
      </div>
    </div>
  );
};

export default UsersList;