import React from "react"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { useParams } from "react-router-dom"
import { privateRoutes } from "models/routes"
import { SlidesForm } from "../SlidesForm/SlidesForm"
import { titleSchema } from "../../utilities/slidesSchema.util"

const ActionsSlider = () => {
  const { id: idSlide } = useParams()

  return (
    <>
      <div className=" my-3 d-flex col col-12">
        <CustomTitle title={idSlide ? titleSchema.edit : titleSchema.confirm} />
      </div>
      <div className="col col-12 d-flex justify-content-start">
        <BackTo wrapLink="my-4" to={"/" + privateRoutes.BACKOFFICE + privateRoutes.SLIDES} />
      </div>

      <SlidesForm idSlide={idSlide} />
    </>
  )
}

export default ActionsSlider
