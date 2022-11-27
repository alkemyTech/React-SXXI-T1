import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { useEffect } from "react";
import privateService from "Services/privateApiService";
import { useCategoryHook } from "./CategoryHook/useCategoryHook";
import { URLs } from "Services/ServicesURLS";

export default function CategoriesList(){
  const {categories, setCategories, handleDelete, toEdit, tHead, myTableData} = useCategoryHook();

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
          alert("error 2");
        }
      })
      .catch(() => alert('error'));
  }, [setCategories]);

  return(
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
        <CustomTable
                tHead={tHead}
                myTableData={myTableData}
                tBody={categories}
                handleDelete={handleDelete}
                handleEdit={toEdit}/>
      </div>
  )
}