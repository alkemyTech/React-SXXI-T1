import React from "react"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { privateRoutes } from "models/routes"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { usePrivateSlides } from "./hooks/usePrivateSlides"
import { myTableData, tableHead } from "./utilities/slidesSchema.util"
import { addIcon } from "assets/images"
import SearchSlides from "./components/SearchSlides/SearchSlides"
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad"

const PrivateSlides = () => {
  const { loadSlides, slides, handleEdit, handleDelete, fetchSlides } = usePrivateSlides()

  const searchSlidesHandler = async (searchText) => {
    const fetchParams = {}

    if (searchText.length >= 3) {
      fetchParams["search"] = searchText
    }

    await fetchSlides(fetchParams)
  }

  let slidesContent
  if (loadSlides) {
    slidesContent = <SpinnerLoad />
  } else {
    slidesContent = <CustomTable tHead={tableHead} tBody={slides} myTableData={myTableData} handleEdit={handleEdit} handleDelete={handleDelete} />
  }

  return (
    <div>
      <div className="mt-2 d-flex col col-12">
        <CustomTitle title="Slides" />
      </div>
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE } />
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
        <SearchSlides onSearchSlides={searchSlidesHandler} />
      </div>
      <div>{slidesContent}</div>
    </div>
  )
}

export default PrivateSlides
