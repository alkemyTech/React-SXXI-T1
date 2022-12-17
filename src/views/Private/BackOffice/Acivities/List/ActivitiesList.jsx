import { addIcon } from "assets/images";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";
import { CustomTable } from "Components/CustomTable/CustomTable";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import SearchActivities from "./components/SearchActivities";
import { useActivities } from "./hooks/useActivities";

const ActivitiesList = () => {
  const tHead = ["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"];
  const myTableData = { name: "name", image: "image", createdAt: "createdAt" };
  const { activity, loadingDelete, editHandler, deleteHandler, searchActivitiesHandler } = useActivities();

  let activitiesContent;
  if (activity.status === "idle" || activity.status === "loading" || loadingDelete) {
    activitiesContent = (
      <CustomTable
        tHead={tHead}
        tBody={activity.activities}
        myTableData={myTableData}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
        loading={true}
      />
    );
  } else {
    activitiesContent =
      activity.activities.length > 0 ? (
        <CustomTable tHead={tHead} tBody={activity.activities} myTableData={myTableData} handleEdit={editHandler} handleDelete={deleteHandler} />
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
        <SearchActivities onSearchActivities={searchActivitiesHandler} disabled={!activity.activities.length} />
      </div>
      <div className="mt-3">{activitiesContent}</div>
    </div>
  );
};

export default ActivitiesList;
