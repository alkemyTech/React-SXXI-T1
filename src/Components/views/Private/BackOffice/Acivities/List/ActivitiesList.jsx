import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { useNavigate } from "react-router-dom";
import SearchActivities from "./components/SearchActivities";
import { useActivities } from "./hooks/useActivities";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util";
import { useState } from "react";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";

const ActivitiesList = () => {
  const { loadingActivities, activitiesData, fetchActivities } = useActivities();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/${id}`);
  };

  const deleteHandler = async (id) => {
    const find = activitiesData.find((el) => id === el.id);

    if (find) {
      const response = await AlertWarning("¿Estas segura/o que deseas eliminar la actividad?");

      if (response) {
        setLoading(true);
        const activityDeleted = await privateService.deleted(URLs.activity, id);

        if (activityDeleted) {
          await AlertSuccess("center", "success", "Actividad eliminada");
          fetchActivities();
        } else {
          await AlertWarning("center", "error", "No se eliminó la actividad");
        }
      }
      setLoading(false);
    }
  };

  const searchActivitiesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchActivities(fetchParams);
  };

  let activitiesContent;
  if (loadingActivities || loading) {
    activitiesContent = <CustomTable
    tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
    tBody={activitiesData}
    myTableData={{ name: "name", image: "image", created_at: "created_at" }}
    handleEdit={editHandler}
    handleDelete={deleteHandler}
    loading={loadingActivities}
  />;
  } else {
    activitiesContent = 
      activitiesData.length > 0 ? (
      <CustomTable
        tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
        tBody={activitiesData}
        myTableData={{ name: "name", image: "image", created_at: "created_at" }}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
        loading={loading}
      />
    ): (
      <div className="col col-12 d-flex justify-content-center mt-5">
        <CustomAlertMessage alertClass="col col-10" text="Sin actividades para mostrar" />
      </div>
      );
  }

  return (
    <div className="my-5">
      <CustomTitle title="Actividades" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo wrapLink="col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4  mb-3"
          text="Crear Actividad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchActivities onSearchActivities={searchActivitiesHandler} />
      </div>
      <div className="mt-3">{activitiesContent}</div>
    </div>
  );
};

export default ActivitiesList;
