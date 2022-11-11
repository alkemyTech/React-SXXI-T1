import React from "react";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { titleSchema } from "./utilities/slidesSchema.util";
import { SlidesForm } from "./components/SlidesForm/SlidesForm";
import { useParams } from "react-router-dom";

const PrivateSlides = () => {
  const { id: idSlide } = useParams();

  return (
    <>
      <div className=" my-3 d-flex col col-12">
        <CustomTitle title={idSlide ? titleSchema.edit : titleSchema.confirm} />
      </div>
      <BackTo wrapLink="my-4 col col-7 col-sm-5 col-lg-4" />
      <SlidesForm idSlide={idSlide} />
    </>
  );
};

export default PrivateSlides;
