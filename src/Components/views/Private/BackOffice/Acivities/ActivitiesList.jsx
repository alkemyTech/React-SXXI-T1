import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";

const DUMMY_ACTIVITIES = [
  {
    id: 1,
    name: "Activity 1",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "Activity 2",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    name: "Activity 3",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
];

const ActivitiesList = () => {
  const navigate = useNavigate();

  const editHandler = (id) => {
    console.log("Edit clicked", id);
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/:${id}`);
  };

  const deleteHandler = (id) => {
    console.log("Delete clicked", id);
  };

  return (
    <div className="my-5">
      <CustomTitle
        title="Listado de Actividades"
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
          text="Crear Actividad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="mt-3">
        <CustomTable
          tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
          tBody={DUMMY_ACTIVITIES}
          myTableData={{ name: "name", image: "image", createdAt: "createdAt" }}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
        />
      </div>
    </div>
  );
};

export default ActivitiesList;