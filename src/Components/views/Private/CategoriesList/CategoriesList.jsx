import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { useEffect } from "react";
import privateService from "Services/privateApiService";
import { useCategoryForm } from "./CategoryHook/useCategoryForm";
import { URLs } from "Services/ServicesURLS";
import { feedbackUser } from "utilities/alerts/feedbackUser.util";
import { useCategories } from "./hooks/useCategories";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import SearchCategories from "./components/SearchCategories";

export default function CategoriesList() {
  const { loadingCategories, categoriesData, fetchCategories } = useCategories();
  const {categories, setCategories, handleDelete, toEdit, tHead, myTableData} = useCategoryForm();

  const searchCategoriesHandler = async (searchText) => {
    const fetchParams = {}

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText
    }

    await fetchCategories(fetchParams)
  }

  let categoriesContent
  if (loadingCategories) {
    categoriesContent = <SpinnerLoad />
  } else {
    categoriesContent = <CustomTable tHead={tHead} myTableData={myTableData} tBody={categoriesData} handleDelete={handleDelete} handleEdit={toEdit} />
  }
  useEffect(()=>{
    privateService.get(URLs.category)
      .then(res => {
        if(res.success){
          const { data } = res;
          const info = data.map(el => {
            const date = el.created_at.slice(0, 10);
            return{
              id: el.id,
              name: el.name,
              createdAt: date
            }
          });
          setCategories(info);
        }else{
          feedbackUser('center', 'error', 'Ha ocurrido un error');
        }
      })
      .catch(() => feedbackUser('center', 'error', 'Ha ocurrido un error'));
  }, [setCategories]);

  return (
    <div className="mb-5">
      <div className="m-1 d-flex col col-12">
          <CustomTitle title="Categorías" height="none" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Categoría"
          to={'create'}
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
  )
}
