import { useNavigate } from "react-router-dom";

import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { privateRoutes } from "models/routes";
import SearchNews from "./components/SearchNews";
import { useNews } from "./hooks/useNews";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import privateService from "Services/privateApiService";
import { URLs } from "Services/ServicesURLS";
import { successMessages } from "../utilities/successMessages";
import { errorMessages } from "../utilities/errorMessages";

const NewsList = () => {
  const tHead = ["#", "Nombre", "Imagen", "Fecha de Creación", "Acciones"];
  const myTableData = { name: "name", image: "image", created_at: "created_at" };
  const { loadingNews, newsData, fetchNews } = useNews();
  const navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.NEWSEDITFORM}${id}`);
  };

  const deleteHandler = async (id) => {
    const find = newsData.find((element) => id === element.id);

    if (find) {
      const response = await AlertWarning("¿Estas segura/o que deseas eliminar la novedad?");

      if (response) {
        setLoading(true);
        const activityDeleted = await privateService.deleted(URLs.news, id);

        if (activityDeleted) {
          await feedbackUser("center", "success", `${successMessages.deleteNews}`);
          fetchActivities();
        } else {
          await feedbackUser("center", "error", `${errorMessages.deleteNews}`);
        }
      }
      setLoading(false);
    }
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
