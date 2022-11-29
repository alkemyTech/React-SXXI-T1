import React from "react"

import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { CustomCard } from "Components/GlobalComponents/CustomCard/CustomCard"
import { routes } from "models/routes"
import { useActivities } from "./hooks/useActivities"
import SearchActivities from "./components/SearchActivities"
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad"

const ActivitiesList = () => {
  const { loadingActivities, activitiesData, fetchActivities } = useActivities()

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
    activitiesContent = activitiesData.map((activity) => (
      <div key={activity.id} className="col col-12 col-sm-6 col-lg-4 mb-3">
        <CustomCard cardInfo={activity} to={`${routes.ACTIVITIES}/${activity.id}`} grid="oneColumn" />
      </div>
    ))
  }

  return (
    <div>
      <CustomTitle wrapTitleClass="d-block h-auto" title="Listado Actividades" />
      <div className="my-3">
        <SearchActivities onSearchActivities={searchActivitiesHandler} />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">{activitiesContent}</div>
    </div>
  )
}

export default ActivitiesList
