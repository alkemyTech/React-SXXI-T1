import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { useCategories } from "./hooks/useCategories";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import SearchCategories from "./components/SearchCategories";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";

export default function CategoriesList() {
  const { loadingCategories, categoriesData, searchCategoriesHandler, handleDelete, toEdit, tHead, myTableData, loading } = useCategories();

  let categoriesContent;
  if (loadingCategories || loading) {
    categoriesContent = <SpinnerLoad />;
  } else {
    categoriesContent =
      categoriesData.length > 0 ? (
        <CustomTable tHead={tHead} myTableData={myTableData} tBody={categoriesData} handleDelete={handleDelete} handleEdit={toEdit} />
      ) : (
        <div className="col col-12 d-flex justify-content-center mt-5">
          <CustomAlertMessage alertClass="col col-10" text="No se encontro la categoria" />
        </div>
      );
  }

  return (
    <div className="my-5">
      <div className="m-1 d-flex col col-12">
        <CustomTitle title="Categorías" height="none" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Categoría"
          to={"create"}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchCategories onSearchCategories={searchCategoriesHandler} />
      </div>
      <div>{categoriesContent}</div>
    </div>
  );
}
