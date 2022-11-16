import React from "react";

import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { CustomCard } from "Components/GlobalComponents/CustomCard/CustomCard";
import { routes } from "models/routes";

const ActivitiesList = () => {
  const activitiesMock = [
    { id: 1, name: "Titulo de prueba", content: "Descripcion de prueba" },
    { id: 2, name: "Titulo de prueba", content: "Descripcion de prueba" },
    { id: 3, name: "Titulo de prueba", content: "Descripcion de prueba" },
    { id: 4, name: "Titulo de prueba", content: "Descripcion de prueba" },
    { id: 5, name: "Titulo de prueba", content: "Descripcion de prueba" },
    { id: 6, name: "Titulo de prueba", content: "Descripcion de prueba" },
  ];

  return (
    <div>
      <CustomTitle
        wrapTitleClass="d-block h-auto"
        title="Listado Actividades"
      />
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {activitiesMock.map((activity) => (
          <div className="col col-12 col-sm-6 col-lg-4 mb-3">
            <CustomCard
              cardInfo={activity}
              to={`${routes.ACTIVITIES}/${activity.id}`}
              grid="oneColumn"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesList;
