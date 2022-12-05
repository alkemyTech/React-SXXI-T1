import { useState } from "react";

import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import privateService from "Services/privateApiService";
import SearchActivities from "./components/SearchActivities";
import { URLs } from "Services/ServicesURLS";
import { useActivities } from "./hooks/useActivities";
import { useNavigate } from "react-router-dom";
import { errorMessages } from "../utilities/errorMessages";
import { successMessages } from "../utilities/successMessages";

const ActivitiesList = () => {
  const tHead = ["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"];
  const myTableData = { name: "name", image: "image", created_at: "created_at" };
  const { activities, loadingActivities, activitiesData, fetchActivities } = useActivities();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log("loadingActivities", loadingActivities, "activitiesData", activitiesData, "activities", activities);

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
          await feedbackUser("center", "success", `${successMessages.deleteActivity}`);
          fetchActivities();
        } else {
          await feedbackUser("center", "error", `${errorMessages.deleteActivity}`);
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
    activitiesContent = (
      <CustomTable
        tHead={tHead}
        tBody={activitiesData}
        myTableData={myTableData}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
        loading={loadingActivities}
      />
    );
  } else {
    activitiesContent =
      activitiesData.length > 0 ? (
        <CustomTable
          tHead={tHead}
          tBody={activitiesData}
          myTableData={myTableData}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
          loading={loading}
        />
      ) : (
        <div className="col col-12 d-flex justify-content-center mt-5">
          <CustomAlertMessage alertClass="col col-10" text="Sin actividades para mostrar" />
        </div>
      );
  }

  return (
    <div className="my-5">
      <CustomTitle title="Actividades" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between mb-3">
        <BackTo wrapLink="col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4"
          text="Crear Actividad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.ACTIVITIESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchActivities onSearchActivities={searchActivitiesHandler} disabled={!activities.length} />
      </div>
      <div className="mt-3">{activitiesContent}</div>
    </div>
  );
};

export default ActivitiesList;
