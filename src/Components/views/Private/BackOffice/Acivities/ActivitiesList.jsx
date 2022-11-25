import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util";

const ActivitiesList = () => {
  const navigate = useNavigate();

  const DUMMY_ACTIVITIES = [
    { id: 1, name: "Activity 1", image: "https://www.w3schools.com/w3css/img_lights.jpg", createdAt: new Date().toLocaleString() },
    { id: 2, name: "Activity 2", image: "https://www.w3schools.com/w3css/img_lights.jpg", createdAt: new Date().toLocaleString() },
    { id: 3, name: "Activity 3", image: "https://www.w3schools.com/w3css/img_lights.jpg", createdAt: new Date().toLocaleString() },
    { id: 4, name: "Activity 4", image: "https://www.w3schools.com/w3css/img_lights.jpg", createdAt: new Date().toLocaleString() },
    { id: 5, name: "Activity 5", image: "https://www.w3schools.com/w3css/img_lights.jpg", createdAt: new Date().toLocaleString() }
  ];

  const tHead = ["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"];

  const myTableData = { name: "name", image: "image", createdAt: "createdAt" };

  const editHandler = async (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const response = await AlertWarning("¿Estas segura/o que deseas eliminar?");
    if(response) await AlertSuccess("center", "success", "Actividad eliminada");
  };

  return (
    <div className="my-5">
      <CustomTitle
        title="Actividades"
        justify="center"
        wrapTextClass="text-center"
        wrapTitleClass="h-auto"
      />
      <div className="my-3 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Actividad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="mt-3">
        <CustomTable
          tHead={ tHead }
          tBody={DUMMY_ACTIVITIES}
          myTableData={ myTableData }
          handleEdit={ editHandler }
          handleDelete={ deleteHandler }
        />
      </div>
    </div>
  );
};

export default ActivitiesList;