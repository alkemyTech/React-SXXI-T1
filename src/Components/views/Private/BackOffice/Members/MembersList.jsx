import { useNavigate } from "react-router-dom"

import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad"
import { privateRoutes } from "models/routes"
import SearchMembers from "./components/SearchMembers"
import { useMembers } from "./hooks/useMembers"

const MembersList = () => {
  const navigate = useNavigate()
  const { loadingMembers, membersData, fetchMembers } = useMembers()

  const editHandler = (id) => {
    console.log("Edit clicked", id)
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.MEMBERSEDITFORM}${id}`)
  }

  const deleteHandler = (id) => {
    console.log("Delete clicked", id)
  }

  const searchMembersHandler = async (searchText) => {
    const fetchParams = {}

    if (searchText.length >= 2) {
      fetchParams["search"] = searchText
    }

    await fetchMembers(fetchParams)
  }

  let membersContent
  if (loadingMembers) {
    membersContent = <SpinnerLoad />
  } else {
    membersContent = (
      <CustomTable
        tHead={["#", "Nombre", "Foto", "Acciones"]}
        tBody={membersData}
        myTableData={{ name: "name", image: "image" }}
        handleEdit={editHandler}
        handleDelete={deleteHandler}
      />
    )
  }

  return (
    <div>
      <CustomTitle title="Miembros" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE + "dashboard"} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Miembro"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.MEMBERSCREATEFORM}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchMembers onSearchMembers={searchMembersHandler} />
      </div>
      <div>{membersContent}</div>
    </div>
  )
}

export default MembersList
