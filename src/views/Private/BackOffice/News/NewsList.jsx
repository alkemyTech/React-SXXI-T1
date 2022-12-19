import { useNavigate } from "react-router-dom";
import { addIcon } from "assets/images";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomTable } from "Components/CustomTable/CustomTable";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import SearchNews from "./components/SearchNews";
import { useNews } from "./hooks/useNews";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";

const NewsList = ({ deleteHandler }) => {
  const { loadingNews, newsData, fetchNews } = useNews();
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSEDITFORM}${id}`);
  };

  const searchNewsHandler = async (searchText, selectedCategory) => {
    const fetchParams = {};

    if (selectedCategory.length > 0) {
      fetchParams["category"] = selectedCategory;
    }

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchNews(fetchParams);
  };

  let newsContent;
  if (loadingNews) {
    newsContent = (
      <CustomTable
        loading={loadingNews}
        tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
        tBody={newsData}
        myTableData={{ name: "name", image: "image", created_at: "created_at" }}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
      />
    );
  } else {
    newsContent = newsData.length ? (
      <CustomTable
        tHead={["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"]}
        tBody={newsData}
        myTableData={{ name: "name", image: "image", created_at: "created_at" }}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
      />
    ) : (
      <div className="col col-12 d-flex justify-content-center mt-5">
        <CustomAlertMessage alertClass="col col-10" text="Sin novedades para mostrar" />
      </div>
    );
  }

  return (
    <div>
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
