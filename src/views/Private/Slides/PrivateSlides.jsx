import React from "react";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import { CustomTable } from "Components/CustomTable/CustomTable";
import { usePrivateSlides } from "./hooks/usePrivateSlides";
import { myTableData, privateSlidesSchema, tableHead } from "./utilities/slidesSchema.util";
import { addIcon } from "assets/images";
import SearchSlides from "./components/SearchSlides/SearchSlides";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";
import { SmallTexts } from "styled-components/App.styled";

const PrivateSlides = () => {
  const { loadSlides, slides, slidesToRender, searchCondition, searchLoading, handleEdit, handleDelete, searchSlidesHandler } = usePrivateSlides();

  return (
    <div>
      <div className="mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-3 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 my-2"
          text="Crear Slide"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDESCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>

      <div className=" my-4">
        <SearchSlides onSearchSlides={searchSlidesHandler} disabled={!slides?.length} />
        {searchCondition && <SmallTexts className="text-danger my-2">{searchCondition}</SmallTexts>}
      </div>

      <CustomTable
        tHead={tableHead}
        tBody={slidesToRender}
        myTableData={myTableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={searchLoading || loadSlides}
      />

      {!loadSlides && !searchLoading && !slidesToRender?.length && (
        <div className="col col-12 d-flex justify-content-center">
          <CustomAlertMessage alertClass="col col-10" text={privateSlidesSchema.noSlides} />
        </div>
      )}
    </div>
  );
};

export default PrivateSlides;
