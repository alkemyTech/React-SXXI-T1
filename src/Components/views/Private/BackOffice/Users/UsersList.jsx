import { addIcon } from "assets/images"
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo"
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable"
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle"
import { privateRoutes } from "models/routes"
import { useNavigate } from "react-router-dom"
import { handleUserConfirm as AlertWarning } from "utilities/alerts/userConfirm.util"
import { feedbackUser as AlertSuccess } from "utilities/alerts/feedbackUser.util"
import { SpinnerLoad } from "Components/GlobalComponents/SpinnerLoad/SpinnerLoad"
import SearchUsers from "./components/SearchUsers"
import { useUsers } from "./hooks/useUsers"

const UsersList = () => {
  const navigate = useNavigate()
  const { loadingUsers, usersData, fetchUsers } = useUsers()

  const tHead = ["#", "Nombre", "Email", "Acciones"]

  const myTableData = { name: "name", email: "email" }

  const editHandler = (id) => {
    console.log("Edit clicked", id)
    navigate(`/${privateRoutes.BACKOFFICE}${privateRoutes.USERSEDIT}/${id}`)
  }

  const deleteHandler = async (id) => {
    const response = await AlertWarning("¿Estas segura/o que deseas eliminar?")
    if (response) await AlertSuccess("center", "success", "Usuario eliminado")
  }

  const searchUsersHandler = async (searchText) => {
    const fetchParams = {}

    if (searchText.length >= 2) {
      fetchParams["search"] = searchText
    }

    await fetchUsers(fetchParams)
  }

  let usersContent
  if (loadingUsers) {
    usersContent = <SpinnerLoad />
  } else {
    usersContent = <CustomTable tHead={tHead} tBody={usersData} myTableData={myTableData} handleEdit={editHandler} handleDelete={deleteHandler} />
  }

  return (
    <div className="my-5">
      <CustomTitle title="Usuarios" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-md-between">
        <BackTo wrapLink="col col-10 col-sm-5 col-md-4 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
        <BackTo
          wrapLink="col col-10 col-sm-5 col-md-4 my-2"
          text="Crear Usuario"
          to={"/" + privateRoutes.BACKOFFICE + privateRoutes.USERSCREATE}
          color="success"
          background="success"
          icon={addIcon}
        />
      </div>
      <div className="my-3">
        <SearchUsers onSearchUsers={searchUsersHandler} />
      </div>
      <div>{usersContent}</div>
    </div>
  )
}

export default UsersList
