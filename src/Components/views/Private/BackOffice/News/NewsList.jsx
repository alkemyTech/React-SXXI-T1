import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DUMMY_NEWS = [
  {
    id: 1,
    name: "News 1",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 2,
    name: "News 2",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: 3,
    name: "News 3",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
];

const NewsList = () => {
  const navigate = useNavigate();

  const editHandler = (id) => {
    console.log("Edit clicked", id);
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSEDITFORM}${id}`);
  };

  const deleteHandler = (id) => {
    console.log("Delete clicked", id);
  };

  return (
    <div>
      <Button onClick={() => navigate("/backoffice/news/create")}>
        Crear Novedad
      </Button>
      <CustomTitle
        title="Listado de Novedades"
        justify="center"
        wrapTextClass="text-center"
        wrapTitleClass="h-auto"
      />
      <div className="d-flex justify-content-start">
        <BackTo
          wrapLink="my-1"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
        />
      </div>
      <div>
        <CustomTable
          tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
          tBody={DUMMY_NEWS}
          myTableData={{ name: "name", image: "image", createdAt: "createdAt" }}
          handleEdit={editHandler}
          handleDelete={deleteHandler}
        />
      </div>
    </div>
  );
};

export default NewsList;
