import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { privateRoutes } from "models/routes"
import { useNavigate } from "react-router-dom"

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
      <div className=" mt-4 d-flex col col-12">
        <CustomTitle
          title="Novedades"
          justify="center"
          wrapTextClass="text-center"
          wrapTitleClass="h-auto"
        />
      </div>
      <div className="my-4 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Novedad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.NEWSCREATEFORM}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
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
