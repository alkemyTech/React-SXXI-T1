import { addIcon } from "assets/images";
import { BackTo } from "Components/GlobalComponents/BackTo/BackTo";
import { CustomAlertMessage } from "Components/GlobalComponents/CustomAlertMessage/CustomAlertMessage";
import { CustomTable } from "Components/GlobalComponents/CustomTable/CustomTable";
import { CustomTitle } from "Components/GlobalComponents/CustomTitle/CustomTitle";
import { SpinnerLoad } from "Components/GlobalComponents/Loading/SpinnerLoad/SpinnerLoad";
import { privateRoutes } from "models/routes";
import SearchMembers from "./components/SearchMembers";
import { useMembers } from "./hooks/useMembers";

const MembersList = () => {
  const { loadingMembers, loadingDelete, membersData, fetchMembers, handleDelete, handleEdit } = useMembers();

  const searchMembersHandler = async (searchText) => {
    const fetchParams = {};

    if (searchText.length >= 2) {
      fetchParams["search"] = searchText;
    }

    await fetchMembers(fetchParams);
  };

  let membersContent;
  if (loadingMembers || loadingDelete) {
    membersContent = <SpinnerLoad />;
  } else {
    membersContent =
      membersData.length > 0 ? (
        <CustomTable
          tHead={["#", "Nombre", "Foto", "Acciones"]}
          tBody={membersData}
          myTableData={{ name: "name", image: "image" }}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : (
        <div className="col col-12 d-flex justify-content-center mt-5">
          <CustomAlertMessage alertClass="col col-10" text="Sin miembros para mostrar" />
        </div>
      );
  }

  return (
    <div>
      <CustomTitle title="Miembros" justify="center" wrapTextClass="text-center" wrapTitleClass="h-auto" />
      <div className="mt-5 d-flex flex-wrap justify-content-center justify-content-sm-between">
        <BackTo wrapLink="col col-10 col-sm-5 my-2 me-1" text="Ir dashboard" to={"/" + privateRoutes.BACKOFFICE} />
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
  );
};

export default MembersList;
