import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad"
import { privateRoutes } from "models/routes"
import { useNavigate } from "react-router-dom"
import SearchActivities from "./components/SearchActivities"
import { useActivities } from "./hooks/useActivities"

const ActivitiesList = () => {
  const { loadingActivities, activitiesData, fetchActivities } = useActivities()
  const navigate = useNavigate()

  const editHandler = (id) => {
    console.log("Edit clicked", id)
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.ACTIVITIESEDIT}/:${id}`)
  }

  const deleteHandler = (id) => {
    console.log("Delete clicked", id)
  }

  const searchActivitiesHandler = async (searchText) => {
    const fetchParams = {}

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText
    }

    await fetchActivities(fetchParams)
  }

  let activitiesContent
  if (loadingActivities) {
    activitiesContent = <SpinnerLoad />
  } else {
    activitiesContent = (
      <CustomTable
        tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
        tBody={activitiesData}
        myTableData={{ name: "name", image: "image", created_at: "created_at" }}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
      />
    )
  }

  return (
    <div className="my-5">
      <CustomTitle title="Listado de Actividades" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo wrapLink="col-sm-8 col-md-5 col-lg-4 mb-3 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE + "dashboard"} />
        <BackTo
          wrapLink="col-sm-8 col-md-5 col-lg-4 mb-3"
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
  )
}

export default ActivitiesList
