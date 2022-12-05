import React from "react";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { usePrivateSlides } from "./hooks/usePrivateSlides";
import { myTableData, privateSlidesSchema, tableHead } from "./utilities/slidesSchema.util";
import { addIcon } from "assets/images";
import SearchSlides from "./components/SearchSlides/SearchSlides";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";

const PrivateSlides = () => {
  const { loadSlides, slides, slidesToRender, handleEdit, handleDelete, searchSlidesHandler } = usePrivateSlides();

  return (
    <div>
      <div className="mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Slide"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>

      <div className="my-3">
        <SearchSlides onSearchSlides={searchSlidesHandler} disabled={!slides.length} />
      </div>

      <CustomTable
        tHead={tableHead}
        tBody={slidesToRender}
        myTableData={myTableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={loadSlides}
      />

      {!loadSlides && !slidesToRender.length && (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text={privateSlidesSchema.noSlides} />
        </div>
      )}
    </div>
  );
};

export default PrivateSlides;
