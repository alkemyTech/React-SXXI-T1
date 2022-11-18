import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";

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
    console.log("Edit clicked", id);
    navigate(
      `/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSEDITFORM}${id}`
    );
  };

  const deleteHandler = (id) => {
    console.log("Delete clicked", id);
  };

  return (
    <div>
      <CustomTitle
        title="Listado de Miembros"
        justify="center"
        wrapTextClass="text-center"
        wrapTitleClass="h-auto"
      />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Miembro"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.MEMBERSCREATEFORM}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div>
        <CustomTable
          tHead={["#", "Nombre", "Foto", "Acciones"]}
          tBody={DUMMY_MEMBERS}
          myTableData={{ name: "name", image: "photo" }}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
        />
      </div>
    </div>
  );
};

export default MembersList;
