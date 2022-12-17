import { CustomTable } from "Components/CustomTable/CustomTable";
import { privateRoutes } from "models/routes";
import { addIcon } from "assets/images";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { useTestimonials } from "./hooks/useTestimonials";

export default function TestimonialsList() {
  const { loadingTestimonials, testimonialsData, handleDelete, toEdit, tHead, myTableData, loading } = useTestimonials();

  let testimonialsContent;
  if (loadingTestimonials || loading) {
    testimonialsContent = (
      <CustomTable
        loading={loadingTestimonials ? loadingTestimonials : loading}
        tHead={tHead}
        myTableData={myTableData}
        tBody={testimonialsData}
        handleDelete={handleDelete}
        handleEdit={toEdit}
      />
    );
  } else {
    testimonialsContent = (
      <CustomTable tHead={tHead} myTableData={myTableData} tBody={testimonialsData} handleDelete={handleDelete} handleEdit={toEdit} />
    );
  }

  return (
    <div>
      <div className="m-1 d-flex col col-12">
        <CustomTitle title="Testimonios" height="none" />
      </div>
      <div className="mb-4 mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 col-lg-3 my-2"
          text="Crear Categoría"
          to={"create"}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div>{testimonialsContent}</div>
    </div>
  );
}
