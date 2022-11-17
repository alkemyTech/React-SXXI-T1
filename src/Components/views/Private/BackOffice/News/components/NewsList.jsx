import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DUMMY_NEWS = [
  {
    name: "News 1",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    name: "News 2",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
  {
    name: "News 3",
    image: "https://www.w3schools.com/w3css/img_lights.jpg",
    createdAt: new Date().toLocaleString(),
  },
];

const NewsList = () => {
  const navigate = useNavigate();

  const editHandler = () => {
    console.log("Edit clicked");
  };

  const deleteHandler = () => {
    console.log("Delete clicked");
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
