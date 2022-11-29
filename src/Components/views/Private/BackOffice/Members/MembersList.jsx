import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { privateRoutes } from "models/routes"
import { useNavigate } from "react-router-dom"
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util"
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util"

const DUMMY_MEMBERS = [
  {
    id: 1,
    name: "Member 1",
    photo: "https://www.w3schools.com/w3css/img_lights.jpg",
  },
  {
    id: 2,
    name: "Member 2",
    photo: "https://www.w3schools.com/w3css/img_lights.jpg",
  },
  {
    id: 3,
    name: "Member 3",
    photo: "https://www.w3schools.com/w3css/img_lights.jpg",
  },
];

const MembersList = () => {
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(
      `/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSEDITFORM}${id}`
    );
  };

  const deleteHandler = async (id) => {
    const response = await AlertWarning("¿Estas segura/o que deseas eliminar?");
    if(response) await AlertSuccess("center", "success", "Usuario eliminado");
  };

  return (
    <section>
      <div className=" mt-4 d-flex col col-12">
        <CustomTitle
          title="Miembros"
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="h-auto"
        />
      </div>
      <div className="my-4 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Miembro"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.MEMBERSCREATEFORM}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <CustomTable
          tHead={["#", "Nombre", "Foto", "Acciones"]}
          tBody={DUMMY_MEMBERS}
          myTableData={{ name: "name", photo: "photo" }}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
        />
      </div>
    </section>
  );
};

export default MembersList;
