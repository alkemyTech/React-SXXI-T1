import React from "react";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { useParams } from "react-router-dom";
import { privateRoutes } from "models/routes";
import { SlidesForm } from "../SlidesForm/SlidesForm";
import { privateSlidesSchema } from "../../utilities/slidesSchema.util";

const ActionsSlider = () => {
  const { id: idSlide } = useParams();

  return (
    <>
      <div className=" my-3 d-flex col col-12">
        <CustomTitle title={idSlide ? privateSlidesSchema.title.edit : privateSlidesSchema.title.confirm} />
      </div>
      <div className="col col-12 d-flex justify-content-start">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDES} />
      </div>

      <SlidesForm idSlide={idSlide} />
    </>
  );
};

export default ActionsSlider;
