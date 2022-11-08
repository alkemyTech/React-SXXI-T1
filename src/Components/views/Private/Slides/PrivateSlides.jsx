import React from "react";
import { BackToHome } from "Components/GlobalComponents/BackToHome/BackToHome";
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
      <BackToHome wrapLink="my-4 col col-7 col-sm-5 col-lg-4" />
      <SlidesForm idSlide={idSlide} />
    </>
  );
};

export default PrivateSlides;
