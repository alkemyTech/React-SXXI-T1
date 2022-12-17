import { addIcon } from "assets/images";
import { BackTo } from "Components/BackTo/BackTo";
import { CustomAlertMessage } from "Components/CustomAlertMessage/CustomAlertMessage";
import { CustomTable } from "Components/CustomTable/CustomTable";
import { CustomTitle } from "Components/CustomTitle/CustomTitle";
import { privateRoutes } from "models/routes";
import SearchMembers from "./components/SearchMembers";
import { useMembers } from "./hook/useMembers";

const MembersList = () => {
  const { member, loadingDelete, handleDelete, handleEdit, searchMembersHandler } = useMembers();

  let membersContent;
  if (member.status === "idle" || member.status === "loading" || loadingDelete) {
    membersContent = (
      <CustomTable
        loading={true}
        tHead={["#", "Nombre", "Foto", "Acciones"]}
        tBody={member.members}
        myTableData={{ name: "name", image: "image" }}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
  }
  if (member.status === "success") {
    membersContent =
      member.members.length > 0 ? (
        <CustomTable
          tHead={["#", "Nombre", "Foto", "Acciones"]}
          tBody={member.members}
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
  if (member.status === "error") {
    membersContent = (
      <div className="col col-12 d-flex justify-content-center mt-5">
        <CustomAlertMessage alertClass="col col-10" text="Ha ocurrido un error al mostrar los miembros" />
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
