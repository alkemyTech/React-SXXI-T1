import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import SearchNews from "./components/SearchNews";
import { useNews } from "./hooks/useNews";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";

const NewsList = () => {
  const tHead = ["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"];
  const myTableData = { name: "name", image: "image", created_at: "created_at" };
  const { loadingNews, editHandler, deleteHandler, searchNewsHandler,newsData } = useNews();
   
  let newsContent;
  if (loadingNews) {
    newsContent = <SpinnerLoad />;
  } else {
    newsContent = <CustomTable tHead={tHead} tBody={newsData} myTableData={myTableData} handleEdit={editHandler} handleDelete={deleteHandler} />;
  }

  return (
    <div className="my-5">
      <CustomTitle title="Novedades" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Novedad"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.NEWSCREATEFORM}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <SearchNews onSearchNews={searchNewsHandler} />
      <div>{newsContent}</div>
    </div>
  );
};

export default NewsList;
