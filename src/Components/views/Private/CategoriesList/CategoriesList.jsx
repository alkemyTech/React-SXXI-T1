import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { useNavigate } from "react-router-dom";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util";
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util";
import { useCategories } from "./hooks/useCategories";
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad";
import SearchCategories from "./components/SearchActivities";

export default function CategoriesList() {
  const navigate = useNavigate();
  const { loadingCategories, categoriesData, fetchCategories } =
    useCategories();
  const tHead = ["#", "Nombre", "Creado", "Acciones"];
  const myTableData = { name: "name", created_at: "created_at" };

  const handleDelete = async (id) => {
    const response = await AlertWarning("¿Estas segura/o que deseas eliminar?");
    if (response) await AlertSuccess("center", "success", "Operación éxitosa");
  };
  const toEdit = (id) => {
    navigate(`edit/${id}`);
  };

  const searchCategoriesHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText;
    }

    await fetchCategories(fetchParams);
  };

  let categoriesContent;
  if (loadingCategories) {
    categoriesContent = <SpinnerLoad />;
  } else {
    categoriesContent = (
      <CustomTable
        tHead={tHead}
        myTableData={myTableData}
        tBody={categoriesData}
        handleDelete={handleDelete}
        handleEdit={toEdit}
      />
    );
  }

  return (
    <>
      <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Categorías" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Categoría"
          to={
            "/" +
            privateRoutes.BACKOFFICE +
            "/" +
            privateRoutes.CATEGORIESCREATE
          }
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchCategories onSearchCategories={searchCategoriesHandler} />
      </div>
      <div>{categoriesContent}</div>
    </>
  );
}
