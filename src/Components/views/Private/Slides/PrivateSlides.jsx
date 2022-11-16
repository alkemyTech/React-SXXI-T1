import React from "react";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { usePrivateSlides } from "./hooks/usePrivateSlides";
import { myTableData, tableHead } from "./utilities/slidesSchema.util";

const PrivateSlides = () => {
  const { loadSlides, slides, handleEdit, handleDelete } = usePrivateSlides();

  return (
    <>
      <div className=" mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="d-flex justify-content-start">
        <BackTo
          wrapLink="my-1"
          to={"/" + privateRoutes.BACKOFFICE + "dashboard"}
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
