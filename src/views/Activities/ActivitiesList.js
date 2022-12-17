import React from "react";

import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { CustomCard } from "Components/CustomCard/CustomCard";
import { routes } from "models/routes";
import { useActivities } from "./hooks/useActivities";
import SearchActivities from "./components/SearchActivities";
import { SpinnerLoad } from "Components/Loading/SpinnerLoad/SpinnerLoad";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";

const ActivitiesList = () => {
  const { loadingActivities, activitiesData, fetchActivities } = useActivities();

  const searchActivitiesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchActivities(fetchParams);
  };

  let activitiesContent;
  if (loadingActivities) {
    activitiesContent = <SpinnerLoad />;
  } else {
    activitiesContent =
      activitiesData.length > 0 ? (
        activitiesData.map((activity) => (
          <div key={activity.id} className="col col-12 col-sm-6 col-lg-4 mb-3">
            <CustomCard cardInfo={activity} to={`${routes.ACTIVITIES}/${activity.id}`} grid="oneColumn" />
          </div>
        ))
      ) : (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text="Sin actividades para mostrar" />
        </div>
      );
  }

  return (
    <div className="container">
      <div className="my-5">
        <CustomTitle wrapTitleClass="d-block h-auto text-center" title="Actividades" />
      </div>
      <div className="my-5">
        <SearchActivities onSearchActivities={searchActivitiesHandler} />
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center">{activitiesContent}</div>
    </div>
  );
};

export default ActivitiesList;
