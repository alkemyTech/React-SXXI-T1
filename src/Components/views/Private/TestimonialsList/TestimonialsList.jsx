import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { useTestimonials } from "./hooks/useTestimonials";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";

export default function TestimonialsList() {
  const { loadingTestimonials, testimonialsData,
    handleDelete, toEdit, tHead, myTableData, loading } = useTestimonials();

  let testimonialsContent
  if (loadingTestimonials || loading) {
    testimonialsContent = <SpinnerLoad />
  } else {
    testimonialsContent = <CustomTable tHead={tHead} 
                                     myTableData={myTableData}
                                     tBody={testimonialsData}
                                     handleDelete={handleDelete}
                                     handleEdit={toEdit} />
  }

  return (
    <div className="my-5">
      <div className="m-1 d-flex col col-12">
          <CustomTitle title="Testimonios" height="none" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Categoría"
          to={'create'}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div>{testimonialsContent}</div>
    </div>
  )
}