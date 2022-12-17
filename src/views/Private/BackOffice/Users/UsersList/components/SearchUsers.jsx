import { SearchInput } from "Components/SearchInput/SearchInput";
import RolSelect from "./RolSelect";
import { useUsers } from "../hooks/useUsers.js";

const SearchUsers = ({ onSearchUsers, selectRol }) => {
  const { roles, searchUser, setSearchUser } = useUsers();

  const changeSearchTextHandler = (text) => {
    setSearchUser(text);
  };

  const changeSelectRol = (rol) => {
    selectRol(rol);
  };

  const searchUsersHandler = () => {
    onSearchUsers(searchUser);
  };

  return (
    <div className="my-3 d-flex gap-3 flex-column flex-sm-row">
      <div className="flex-fill">
        <SearchInput searchText={searchUser} placeholder="Buscar usuario..." onChangeText={changeSearchTextHandler} onSearch={searchUsersHandler} />
      </div>
      <div>
        <RolSelect onChangeRoles={changeSelectRol} roles={roles} />
      </div>
    </div>
  );
};

export default SearchUsers;
