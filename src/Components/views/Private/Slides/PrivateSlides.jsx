import React from "react";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { usePrivateSlides } from "./hooks/usePrivateSlides";
import { myTableData, tableHead } from "./utilities/slidesSchema.util";
import { addIcon } from "assets/images";

const PrivateSlides = () => {
  const { loadSlides, slides, handleEdit, handleDelete } = usePrivateSlides();

  return (
    <>
      <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="mt-5 mb-4 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2 me-1"
          text="Ir dashboard"
          to={"/" + privateRoutes.BACKOFFICE }
        />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Slide"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <CustomTable
        tHead={tableHead}
        tBody={slides}
        loading={loadSlides}
        myTableData={myTableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default PrivateSlides;
