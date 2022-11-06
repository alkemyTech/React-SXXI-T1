import React from "react";
import { Card } from "react-bootstrap";
import "../CardListStyles.css";
import { Link } from "react-router-dom";

import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";

const ActivitiesList = () => {
  const activitiesMock = [
    { id: 1, name: "Titulo de prueba", description: "Descripcion de prueba" },
    { id: 2, name: "Titulo de prueba", description: "Descripcion de prueba" },
    { id: 3, name: "Titulo de prueba", description: "Descripcion de prueba" },
  ];

  return (
    <div>
      <CustomTitle
        wrapTitleClass="d-block h-auto"
        title="Listado Actividades"
      />
      <ul className="d-flex justify-content-around gap-2">
        {activitiesMock.map((activity) => (
          <Card key={activity.id}>
            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
              <Card.Text>{activity.description}</Card.Text>
              <Card.Link as={Link} to={`/actividades/${activity.id}`}>
                Ver Actividad
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
